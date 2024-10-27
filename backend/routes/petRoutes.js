import express from "express";
import {
    createPet,
    getPetsByOwner,
    updatePet,
    deletePet,
} from "../controllers/petController.js";
import cookieJwtAuth from "../middleware/cookieJwtAuth.js";

const router = express.Router();

// Middleware to protect the routes
router.use(cookieJwtAuth);

// Routes
router.post("/", createPet); // Create a new pet
router.get("/", getPetsByOwner); // Get all pets for the logged-in owner
router.put("/:petId", updatePet); // Update a pet's information
router.delete("/:petId", deletePet); // Delete a pet

export default router;
