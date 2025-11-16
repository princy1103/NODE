// src/routes/auth.routes.js
import express from "express";
import {
  getLogin,
  postLogin,
  getRegister,
  postRegister,
  logout
} from "../controllers/auth.controller.js";

import { attachUser, isLoggedIn } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Register
router.get("/register", attachUser, getRegister);
router.post("/register", postRegister);

// Login
router.get("/login", attachUser, getLogin);
router.post("/login", postLogin);

// Logout
router.get("/logout", isLoggedIn, logout);

export default router;
