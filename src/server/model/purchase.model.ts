import { Document, Schema, model } from 'mongoose';
import { nanoid } from 'nanoid';

export interface PurchaseDocument extends Document {
  cartItems: [{
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    amount: number;
  }];
    totalAmount: number;
    createdAt: Date;
    updatedAt: Date;    
}

const PurchaseSchema = new Schema(
  {
    cartItems: [{
      purchaseId: {
        type: String,
        required: true,
        unique: true,
        default: () => nanoid(10),
      },
      title: {type: String, default: true},
      price: {type: Number, default: true},
      description: {type: String, default: true},
      category: { type: String, default: true},
      image: {type: String, default: true},
      amount: {type: Number, default: true },
    }],
    totalAmount: {type: Number, default: true},
  },
  {timestamps: true}
  )

const Purchase = model<PurchaseDocument>("Purchase", PurchaseSchema)

export default Purchase
