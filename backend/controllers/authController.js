import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
const emailRegex = /.+\@.+\..+/;

// Vet: Sign Up
export const vetSignUp = async (req, res) => {
    try {
        const { first_Name, last_Name, email, password } = req.body;
        // Validate email format:
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }
        // Check for duplicate vet
        const existingVet = await User.findOne({ email });
        if (existingVet) {
            return res.status(409).json({ error: "Email already registered" });
        }
        // Encrypt with hashed password
        const hashedPassword = await bcrypt.hash(password, 10);
        const newVet = new User({
            first_name: first_Name,
            last_Name: last_Name,
            email: email,
            password: hashedPassword,
            type: "doctor",
        });

        await newVet.save();

        res.status(201).json({ message: "Vet signed up successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error signing in Vet" });
    }
};

// Vet: Login
export const vetLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Validate email format:
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }
        // Check for vet
        const vet = await User.findOne({ email });

        if (!vet) {
            return res.status(401).json({ error: "User not found" });
        }
        // Compare hashed password
        const isPasswordCorrect = await bcrypt.compare(password, vet.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ error: "Incorrect password" });
        }

        // Ensure JWT_SECRET is defined
        const JWT_SECRET = process.env.JWT_SECRET;
        if (!JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined");
        }

        // Generate JWT token
        const token = jwt.sign({ id: vet.email, role: "vet" }, JWT_SECRET, {
            expiresIn: "1h",
        });
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 1000000,
            signed: true,
        });
        res.status(200).json({ message: "Vet logged in successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error logging in vet" });
    }
};

// Pet Owner: Sign Up
export const ownerSignUp = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        // Validate email format:
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }
        // Check for duplicate
        const existingOwner = await User.findOne({ email });
        if (existingOwner) {
            return res.status(403).json({ error: "Email already registered" });
        }
        // Encrypt hashed password
        const hashedPassword = await bcrypt.hash(password, 10);
        const newOwner = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
            type: "user",
        });
        await newOwner.save();
        res.status(201).json({ message: "Pet owner signed up successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error signing up owner" });
    }
};

// Pet Owner: Login
export const ownerLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Validate email format:
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }
        // Check if user exists
        const owner = await User.findOne({ email });
        if (!owner) {
            return res.status(403).json({ error: "User not found" });
        }
        // Check if password is correct
        const isPasswordCorrect = await bcrypt.compare(
            password,
            owner.password
        );
        // Compare hashed password
        if (!isPasswordCorrect) {
            return res.status(401).json({ error: "Incorrect password" });
        }
        // Ensure JWT_SECRET is defined
        const JWT_SECRET = process.env.JWT_SECRET;
        if (!JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined");
        }
        // Generate JWT token
        const token = jwt.sign({ id: owner.email, role: "owner" }, JWT_SECRET, {
            expiresIn: "1h",
        });
        res.status(200).json({ message: "Pet owner logged in successfully" });
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 1000000,
            signed: true,
        });
        return res.redirect("/user/dashboard");
    } catch (error) {
        res.status(500).json({ error: "Error logging in owner" });
    }
};
