import mongoose, { Schema, ObjectId } from "mongoose";

export type Profile = {
  _id: ObjectId;
  CPF: string;
  type: "provider" | "receiver",
  createdAt: Date;
  updatedAt: Date;
}

const ProfileSchema: Schema<Profile> = new Schema({
    CPF: { type: String, required: true, ref: "User" },
    type: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  }, {
    collection: 'Profile'
});

export const ProfileModel = mongoose.model("User", ProfileSchema);