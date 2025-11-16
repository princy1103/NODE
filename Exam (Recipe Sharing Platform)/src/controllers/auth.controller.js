// src/controllers/auth.controller.js
import User from "../models/User.model.js";
import jwt from "jsonwebtoken";

const createToken = (user) => {
  return jwt.sign(
    { id: user._id, username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

export const getRegister = (req, res) => {
  res.render("register");
};

export const postRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) {
      return res.render("register", { error: "Email already exists" });
    }

    const user = await User.create({ username, email, password });
    res.redirect("/auth/login");
  } catch (err) {
    return res.render("register", { error: "Registration failed" });
  }
};

export const getLogin = (req, res) => {
  res.render("login");
};

export const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.render("login", { error: "Invalid credentials" });

    const match = await user.comparePassword(password);
    if (!match) return res.render("login", { error: "Invalid credentials" });

    const token = createToken(user);

    res
      .cookie("token", token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 })
      .redirect("/");
  } catch (err) {
    return res.render("login", { error: "Login failed" });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/auth/login");
};
