import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { CartItemType } from '../Type';

//types
type Props = {
  cartItems: CartItemType[];
  totalAmount: number;
  handleCheckout: (cartItems: CartItemType[], totalAmount: number) => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
    },
    checkout: {
      width: '50%',
      margin: 'auto',
      borderRadius: '20px',
      padding: '20px',
      backgroundColor: '#fc7b03',
      fontWeight:'bold'
    }
  })
);

const PurchaseButton: React.FC<Props> = ({ cartItems, totalAmount, handleCheckout }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button 
        className={classes.checkout}
        onClick={() => handleCheckout(cartItems, totalAmount)}
        data-cy={`items-in-cart${cartItems}`}>Purchase</Button>
    </div>
  );
};
export default PurchaseButton;


