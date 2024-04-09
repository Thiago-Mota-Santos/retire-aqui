import mongoose, { Schema, ObjectId } from "mongoose";

export enum ProductSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

export type Provider = {
  _id: ObjectId;
  CPF: string;
  productName: string;
  whereIsPurchased: string;
  deliveryDate: Date;
  productSize: ProductSize;
  address: string;
  status: 'pending' | 'done';
  createdAt: Date;
  updatedAt: Date;
}

const ProviderSchema: Schema<Provider> = new Schema({
    CPF: { type: String, required: true, ref: "User" },
    productName: { type: String, required: true },
    whereIsPurchased: { type: String, required: true },
    deliveryDate: { type: Date, required: true },
    productSize: { type: String , required: true },
    address: { type: String, required: true},
    status: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  }, {
    collection: 'Provider'
});

export const ProviderModel = mongoose.model("Provider", ProviderSchema);