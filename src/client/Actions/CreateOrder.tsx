import axios from 'axios';
import { CartItemType } from '../App';

const config = {
  headers: {
    'Content-Type': 'application/json',
    // To add user authentication
  },
};

export const CreateOrder = async (data: {cartItems: CartItemType[], totalAmount: number}) => {
  try{
    const { data: response } = await axios.post('api/purchase', data, config);
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}