import mongoose from "mongoose";
import { IUser } from "../interfaces/user.interface";

const User = new mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  name: {
    required: [true, "Please enter full name"],
    type: String
  },
  password: String
});

export default mongoose.model<IUser & mongoose.Document>("User", User);
