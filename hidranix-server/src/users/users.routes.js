import express from "express";
import {
  getUsersController,
  createUserController,
  getUserByIdController,
  updateUserServiceStatusController,
  getUserStatus,
  getUserByClerkIdController,
  getAllUsersController,
} from "./users.controller.js";
import { authenticate, authorize } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Rutas para ADMIN
router.get("/all", getAllUsersController);
router.get("/", getUsersController);
// router.get("/", authenticate, authorize(["ADMIN"]), getUsersController);
router.put(
  "/:id/updateStatus",
  updateUserServiceStatusController
);
router.post("/", authenticate, createUserController);

// Rutas accesibles para todos los roles
router.get("/:id", authenticate, getUserByIdController);
router.get('/:id/status', getUserStatus);
router.get("/clerk/:clerkId", getUserByClerkIdController);

export default router;
