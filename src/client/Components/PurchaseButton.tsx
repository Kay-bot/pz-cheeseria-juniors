import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { CartItemType } from '../App';

//types
type Props = {
  cheeseItem: CartItemType;
  handleCheckout: (clickedItem: CartItemType) => void;
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

const handleCheckout = (clickedItem: CartItemType): void => {
  throw new Error('Function not implemented.');
}

const PurchaseButton: React.FC<Props> = ({ cheeseItem }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button 
        className={classes.checkout}
        onClick={() => handleCheckout(cheeseItem)}
        data-cy={`${cheeseItem.id}`}>Checkout</Button>
    </div>
  );
};
export default PurchaseButton;


