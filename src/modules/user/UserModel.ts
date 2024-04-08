import mongoose, { Schema, ObjectId } from "mongoose";

export type User = {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export type PublicUser = {
  _id: string;
  name: string;
  email: string;
}

const UserSchema: Schema<User> = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  }, {
    collection: 'user'
});

export const UserModel = mongoose.model("User", UserSchema);