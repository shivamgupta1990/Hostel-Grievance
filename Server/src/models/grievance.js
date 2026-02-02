import mongoose from 'mongoose';

const grievanceSchema = new mongoose.Schema({
  registrationId: { type: String, required: true },
  hostelName: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [
    { link: { type: String } }
  ],
  status: { type: String, enum: ["pending","running", "completed"], default: "pending" },
  category: { 
    type: String, 
    enum: ["cleanliness", "security", "maintenance", "mess", "internet","other"], 
    required: true,
    default: "other"
  }
}, { timestamps: true });

const Grievance = mongoose.model("Grievance", grievanceSchema);

export default Grievance;
