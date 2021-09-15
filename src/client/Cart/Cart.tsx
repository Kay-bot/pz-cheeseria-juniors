import CartItem from './CartItem/CartItem';
import { Wrapper } from './Cart.styles';
import { CartItemType } from '../App';


type Props = {
  cartItems: CartItemType[];
  totalAmount: number;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, totalAmount, addToCart, removeFromCart }) => {

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${totalAmount.toFixed(2)}</h2>
      <div>
      </div>
    </Wrapper>
  );

};

export default Cart;
