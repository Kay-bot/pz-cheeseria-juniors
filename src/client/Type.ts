// Types
export type CartItemType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  amount: number;
};

export type RecentPurchasesType = {
  cartItems:CartItemType[]
  totalAmount: number
}