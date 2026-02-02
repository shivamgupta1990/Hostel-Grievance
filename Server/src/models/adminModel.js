import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  
  // Admin details
  role: { type: String, default: "admin" }, // Hostel Coordinator, System Admin.
  staffId: { type: String, required: true, unique: true, lowercase:true, trim:true }, // Official staff ID
  name : {type: String, required: true},
  designation: { type: String, enum: ["chief warden","warden","supervisor","system admin"], required:true }, // Hostel Coordinator, System Admin.
  hostelName: { type: String, enum:["A","B","C","D","E","F","G","H","I","J","K","L"], default: null, required: true }, // Hostel they manage
  personalEmail: { type: String, required: true, unique: true, lowercase: true, trim: true },
  phoneNumber: { type: String, required:true },
  password : {type : String, required: true},
}, { timestamps: true });

export default mongoose.model("Admin", adminSchema);
