import express from "express";
import {
    ownerLogin,
    ownerSignUp,
    vetLogin,
    vetSignUp,
} from "../controllers/authController.js";

const router = express.Router();

// Vet Sign Up
router.post("/vet/signup", vetSignUp);

// Vet Login
router.post("/vet/login", vetLogin);

// Pet Owner Sign Up
router.post("/owner/signup", ownerSignUp);

// Pet Owner Login
router.post("/owner/login", ownerLogin);

export default router;
