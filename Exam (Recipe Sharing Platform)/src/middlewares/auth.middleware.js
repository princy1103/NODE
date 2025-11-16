// src/middlewares/auth.middleware.js
import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

export const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) return res.redirect("/auth/login");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, username, role }
    res.locals.user = decoded;
    next();
  } catch (err) {
    return res.redirect("/auth/login");
  }
};

// For routes that CAN work without login (index pages)
export const attachUser = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      res.locals.user = null;
      return next();
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    res.locals.user = decoded;
    next();
  } catch (err) {
    res.locals.user = null;
    next();
  }
};
