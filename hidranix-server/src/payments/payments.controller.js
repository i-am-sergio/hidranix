// payments/payments.controller.js
import { getPublicKey, processYapePayment, processPayment } from "./mercadopago.service.js";

export async function getPublicKeyController(req, res) {
  try {
    const publicKey = await getPublicKey();
    res.json({ public_key: publicKey });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function processYapePaymentController(req, res) {
  try {
    const payment = await processYapePayment(req.body);
    res.json(payment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function processPaymentController(req, res) {
  try {
    const payment = await processPayment(req.body);
    res.json(payment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}