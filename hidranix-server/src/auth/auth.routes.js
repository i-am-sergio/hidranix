import express from 'express';
import { registerController, loginController, logoutController, handleClerkWebhook } from './auth.controller.js';

const router = express.Router();

router.post('/webhook', express.raw({ type: 'application/json' }), handleClerkWebhook);

// Ruta para el registro de usuario
router.post('/register', registerController);

// Ruta para el login de usuario
router.post('/login', loginController);

// Ruta para el logout de usuario
router.post('/logout', logoutController);

export default router;
