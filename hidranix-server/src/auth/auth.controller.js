import { registerUser, loginUser } from "./auth.service.js";
import { validateRegisterData, validateLoginData } from "./auth.validation.js";
import { verifyWebhook } from "@clerk/express/webhooks";
import User from "../users/users.model.js";
import { CLERK_WEBHOOK_SIGNING_SECRET } from "../config/config.js";

export async function handleClerkWebhook(req, res) {
  try {
    // Verificar cabeceras manualmente para debug
    console.log("Headers recibidos:", req.headers);
    console.log("Body raw:", req.body.toString());

    const event = await verifyWebhook(req, {
      signingSecret: CLERK_WEBHOOK_SIGNING_SECRET,
    });

    if (event.type === "user.created") {
      const {
        id,
        first_name,
        last_name,
        email_addresses,
        primary_email_address_id,
      } = event.data;

      // Obtener email principal
      const primaryEmail = email_addresses.find(
        (email) => email.id === primary_email_address_id
      )?.email_address;

      if (!primaryEmail) {
        return res.status(400).json({ error: "Email no encontrado" });
      }

      // Crear o actualizar usuario en tu base de datos
      await User.upsert({
        clerkId: id, // Recomiendo agregar este campo al modelo
        name: `${first_name} ${last_name}`.trim(),
        email: primaryEmail,
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error detallado:", {
      message: error.message,
      stack: error.stack,
      receivedSignature: req.headers["svix-signature"],
      receivedBody: req.body.toString(),
    });
    return res.status(400).json({ error: error.message });
  }
}

export async function registerController(req, res) {
  try {
    // 1. Validar datos de registro
    const { error } = validateRegisterData(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // 2. Llamar al servicio de registro
    const userData = await registerUser(req.body);

    // 3. Respuesta exitosa (HTTP 201)
    res.status(201).json({
      user: {
        id: userData.id,
        name: userData.name,
        email: userData.email,
      },
      token: userData.token, // Envía el token al frontend
    });
  } catch (error) {
    console.error("Error en registro:", error);
    res.status(400).json({
      message: error.message,
    });
  }
}

export async function loginController(req, res) {
  try {
    // 1. Validación de datos
    const { error } = validateLoginData(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    // 2. Autenticar usuario
    const { user, token } = await loginUser(req.body);

    // 3. Configuración de la cookie
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      maxAge: 60 * 60 * 1000, // 1 hora
    };

    // 4. Respuesta exitosa
    res
      .status(200)
      .cookie("access_token", token, cookieOptions)
      .json({ user, token });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message || "Error en autenticación",
    });
  }
}

export async function logoutController(req, res) {
  res
    .clearCookie("access_token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      path: "/",
    })
    .status(200)
    .json({
      message: "Sesión cerrada exitosamente",
    });
}
