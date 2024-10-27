import User from "../models/userModel.js";

export const getVetDashboard = async (req, res) => {
    try {
        // Using req.user.id which is the MongoDB _id
        const vet = await User.findById(req.user.id);
        if (!vet) {
            return res.status(404).json({ error: "Vet not found" });
        }

        // Send vet data to the frontend
        res.status(200).json({ message: "Vet dashboard data", vet });
    } catch (error) {
        res.status(500).json({ error: "Error fetching vet dashboard data" });
    }
};
