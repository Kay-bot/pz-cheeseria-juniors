import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { CartItemType } from '../Type';

//types
type Props = {
  cheeseItem: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
    },
    addToCard: {
      width: '50%',
      margin: 'auto',
      borderRadius: '20px',
      padding: '20px',
      backgroundColor: '#fc7b03',
      fontWeight:'bold'
    }
  })
);

const PurchaseButton: React.FC<Props> = ({ cheeseItem, handleAddToCart }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
      className={classes.addToCard}
      onClick={() => handleAddToCart(cheeseItem)}
      data-cy={`add-to-cart-${cheeseItem.id}`}>Add to cart</Button>
    </div>
  );
};
export default PurchaseButton;


