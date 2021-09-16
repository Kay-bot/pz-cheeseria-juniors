import { number, object, string, } from "yup";

const payload = {
  body: object().shape({
    cartItems: object().shape({
      title: string(),
      price: number(),
      description: string(),
      category: string(),
      image: string(),
      amount: number(),
    }).required("Required"),
    totalAmount: number()
  }),
};

export const createPurchaseSchema = object({
  ...payload,
});