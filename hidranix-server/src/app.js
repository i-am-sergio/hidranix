import express from "express";
import cors from "cors";
import path from "path";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import usersRoutes from "./users/users.routes.js";
import paymentsRoutes from "./payments/payments.routes.js";
import authRoutes from './auth/auth.routes.js';
import iotRoutes from "./iot/iot.routes.js";

const app = express();

const allowedOrigins = [
  "https://phinix.com.pe" // tu dominio específico
];

// Configuración dinámica de CORS
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) {
      // Permitir solicitudes sin origin (ej. Postman, curl)
      return callback(null, true);
    }
    if (allowedOrigins.includes(origin)) {
      // Si es un dominio permitido explícitamente
      return callback(null, true);
    }
    // Permitir todos los demás orígenes
    return callback(null, true);
  },
  credentials: true, // puedes usar cookies/autenticación
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 204
}));

app.use('/auth', authRoutes);

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev')); // Log requests to the console
app.use(express.static(path.resolve("public")));


// Routes
app.use("/users", usersRoutes); // Users Routes
app.use("/payments", paymentsRoutes); // Payments Routes
app.use('/iot', iotRoutes);


// Health http://localhost:5000/health
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is healthy" });
});

export default app;