import mongoose from 'mongoose';

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    gender_status: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: String,
        required: true
    },
    vaccination_records: [
        {
            date: String,
            type: String
        }
    ],
    allergies: {
        type: String,
        default: "None"
    },
    medications: {
        type: String,
        default: "None"
    },
    past_illnesses_or_surgeries: {
        type: String,
        default: "None"
    },
    feeding_instructions: {
        type: String,
        default: "N/A"
    },
    behavioral_concerns: {
        type: String,
        default: "N/A"
    },
    user_id: {
        type: Number,
        required: true,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Pet = mongoose.model('Pet', PetSchema);
export default Pet;
