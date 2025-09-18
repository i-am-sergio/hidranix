import dotenv from "dotenv";
import { MercadoPagoConfig, Payment } from "mercadopago";
import { savePayment } from "../payments/payments.service.js"; // Ajusta la ruta a tu archivo services.js

dotenv.config();

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
  options: { timeout: 5000 },
});
const paymentInstance = new Payment(client);

export async function getPublicKey() {
  return process.env.MP_PUBLIC_KEY;
}

export async function processYapePayment(paymentData) {
  const body = {
    transaction_amount: 2000, // Monto en soles
    token: paymentData.token.id,
    description: "Compra en mi tienda hoy",
    installments: 1,
    payment_method_id: "yape",
    payer: { email: "cliente@test.com" },
  };

  const payment = await paymentInstance.create({ body });

  if (payment.status === "approved") {
    const dni = "12345678";
    const email = "yapeclient@gmail.com";
    await savePayment(payment, dni, email);
  }

  return payment;
}


export async function processPayment(paymentData) {
  try {
    if (!paymentData.transaction_amount || !paymentData.token || !paymentData.payment_method_id || !paymentData.payer) {
      throw new Error("Datos de pago incompletos");
    }
    console.log("PAYMENT DATA RECIBIDA:", paymentData);

    const body = {
      transaction_amount: Number(paymentData.transaction_amount),
      token: paymentData.token,
      description: paymentData.description || "Pago aprobado",
      installments: Number(paymentData.installments) || 1,
      payment_method_id: paymentData.payment_method_id,
      issuer_id: paymentData.issuer_id,
      payer: {
        email: paymentData.payer.email || "test@test.com",
        identification: {
          type: paymentData.payer.identification.type || "DNI",
          number: paymentData.payer.identification.number || "12345678",
        },
      },
    };

    console.log("BODY ENVIADO A MERCADO PAGO:", body);

    const payment = await paymentInstance.create({ body });

    if (payment.status === "approved") {
      const dni = paymentData.payer.identification.number;
      const email = paymentData.payer.email;
      await savePayment(payment, dni, email);
    }

    console.log("RESPUESTA DE MERCADO PAGO:", payment);

    return payment;
  } catch (error) {
    console.error("Error procesando el pago:", error);
    throw new Error(`Error procesando el pago: ${error.message}`);
  }
}
