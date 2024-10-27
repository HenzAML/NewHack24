import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import vetRoutes from "./routes/vetRoutes.js";
import petRoutes from "./routes/petRoutes.js";

/* CONFIGURATION */
dotenv.config();

const app = express();
const port = process.env.PORT || 3001; // Use 3001 as fallback if PORT is undefined

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// app.get('/', (req, res) => {
//     res.send("Server is ready 123");
// });

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/vets", vetRoutes);
app.use("/pets", petRoutes);

// app.listen(port, () => {
//     console.log(`Server started successfully on port: ${port}`);
// });

/* MONGOOSE SETUP */
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.error("MongoDB connection error:", error));

/* SAMPLE DATASET ROUTE */
const UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    user_id: Number,
    password: String,
    type: String,
});

const UserModel = mongoose.model("Dataset", UserSchema);

app.get("/getDataset", (req, res) => {
    UserModel.find({})
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                error: "An error occurred while fetching data.",
            });
        });
});

app.listen(port, () => {
    console.log(`Server started successfully on port: ${port}`);
});
