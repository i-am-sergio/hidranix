// payments/payments.routes.js
import express from "express";
import {
  getPublicKeyController,
  processYapePaymentController,
  processPaymentController
} from "./payments.controller.js";

const router = express.Router();

router.get("/get_public_key", getPublicKeyController);
router.post("/process_yape_payment", processYapePaymentController);
router.post("/process_payment", processPaymentController);

export default router;