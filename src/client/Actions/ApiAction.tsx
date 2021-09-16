import axios from 'axios';
import { CartItemType } from '../Type';

export const getCheeses = async (): Promise<CartItemType[]> =>
  await (await fetch(`api/cheeses`)).json();


const config = {
    headers: {
      'Content-Type': 'application/json',
      // To add user authentication
    },
};
  
export const createOrder = async (data: {cartItems: CartItemType[], totalAmount: number}) => {
  try{
    const { data: response } = await axios.post('api/purchase', data, config);
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}

