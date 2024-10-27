import Pet from "../models/petModel.js";

// Create a new pet
export const createPet = async (req, res) => {
    try {
        const {
            name,
            species,
            breed,
            gender_status,
            date_of_birth,
            vaccination_records,
            allergies,
            medications,
            past_illnesses_or_surgeries,
            feeding_instructions,
            behavioral_concerns,
        } = req.body;

        const newPet = new Pet({
            name,
            species,
            breed,
            gender_status,
            date_of_birth,
            vaccination_records,
            allergies,
            medications,
            past_illnesses_or_surgeries,
            feeding_instructions,
            behavioral_concerns,
            user_id: req.user.id, // Assuming req.user.id is the logged-in user's ID
        });

        await newPet.save();
        res.status(201).json({ message: "Pet created successfully", pet: newPet });
    } catch (error) {
        res.status(500).json({ error: "Error creating pet", details: error.message });
    }
};

// Get all pets for a specific owner
export const getPetsByOwner = async (req, res) => {
    try {
        const pets = await Pet.find({ user_id: req.user.id });
        res.status(200).json({ pets });
    } catch (error) {
        res.status(500).json({ error: "Error fetching pets", details: error.message });
    }
};

// Update pet information
export const updatePet = async (req, res) => {
    const { petId } = req.params; // Get the pet ID from the URL
    try {
        const updatedPet = await Pet.findByIdAndUpdate(petId, req.body, { new: true });
        if (!updatedPet) {
            return res.status(404).json({ error: "Pet not found" });
        }
        res.status(200).json({ message: "Pet updated successfully", pet: updatedPet });
    } catch (error) {
        res.status(500).json({ error: "Error updating pet", details: error.message });
    }
};

// Delete a pet
export const deletePet = async (req, res) => {
    const { petId } = req.params; // Get the pet ID from the URL
    try {
        const deletedPet = await Pet.findByIdAndDelete(petId);
        if (!deletedPet) {
            return res.status(404).json({ error: "Pet not found" });
        }
        res.status(200).json({ message: "Pet deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting pet", details: error.message });
    }
};
