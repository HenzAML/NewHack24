import express from "express";
import cookieJwtAuth from "../middleware/cookieJwtAuth.js";
import { getOwnerDashboard } from "../controllers/userController.js";

const router = express.Router();
router.get("/dashboard", cookieJwtAuth, getOwnerDashboard);

export default router;
