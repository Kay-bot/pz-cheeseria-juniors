import { DocumentDefinition } from "mongoose";
import Purchase, { PurchaseDocument } from "../model/purchase.model";

export function createPurchase(input: DocumentDefinition<PurchaseDocument>) {
  return Purchase.create(input);
}