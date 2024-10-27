import express from "express";
import cookieJwtAuth from "../middleware/cookieJwtAuth.js";
import { getVetDashboard } from "../controllers/vetController.js";

const router = express.Router();
router.get("/dashboard", cookieJwtAuth, getVetDashboard);

export default router;
