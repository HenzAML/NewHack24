import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes.js'; 
import userRoutes from './routes/userRoutes.js';
import vetRoutes from './routes/vetRoutes.js';
import petRoutes from './routes/petRoutes.js'; 


/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
    res.send("Server is ready 123");
});

app.listen(5001, () => {
    console.log('Server started at http://localhost:5001');
});

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/vets", vetRoutes);
app.use("/pets", petRoutes);

/* MONGOOSE SETUP */
mongoose.connect('mongodb://localhost:27017/petGuard', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

const UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    user_id: Number,
    password: String,
    type: String
});

const UserModel = mongoose.model("Dataset", UserSchema);  // Ensure the model name matches the collection name in MongoDB

app.get("/getDataset", (req, res) => {
    UserModel.find({})
      .then((users) => {
          res.json(users);  // Use 'users' instead of 'data'
      })
      .catch((err) => {
          console.error(err);
          res.status(500).json({ error: "An error occurred while fetching data." });
      });
});

app.listen(3001, () => {
    console.log('Server started at http://localhost:3001');
});