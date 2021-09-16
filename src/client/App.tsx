import React, { useState } from 'react';
import { useQuery } from 'react-query';
// Api
import { getCheeses, createOrder } from './Actions/ApiAction'
// Components
import PurchaseButton from './Components/PurchaseButton'
import Item from './Cart/Item/Item';
import Cart from './Cart/Cart';
import CheeseDetails from './Cart/Dialog/CheeseDetails'
import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RestoreIcon from '@material-ui/icons/Restore';
import Badge from '@material-ui/core/Badge';
// Styles
import { Wrapper, StyledButton, StyledAppBar, HeaderTypography } from './App.styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
// Types
import { CartItemType } from './Type';


const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [clickCardIndex, setClickCardIndex] = useState<number>(2);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'cheeses',
    getCheeses
  );

  // total cost of cheeses cheese in the cart
  const totalAmount = cartItems.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  const handleCheckout = (cartItems: CartItemType[], totalAmount: number) => {
    createOrder({cartItems, totalAmount})
  }

  return (

    <Wrapper>
      <StyledAppBar position="static">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <StyledButton>
              <RestoreIcon />
              <Typography variant="subtitle2">
                Recent Purchases
              </Typography>
            </StyledButton>

            <HeaderTypography variant="h3" noWrap>
              Welcome to Patient Zero's Cheeseria
            </HeaderTypography>

            <StyledButton onClick={() => setCartOpen(true)}>
              <Badge
                badgeContent={getTotalItems(cartItems)}
                color='error'
                data-cy="badge-count">
                <AddShoppingCartIcon />
              </Badge>

              <Typography variant="subtitle2">
                Cart
              </Typography>
            </StyledButton>

          </Grid>
        </Toolbar>
      </StyledAppBar>

      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
          totalAmount={totalAmount}
        />
         {cartItems.length >= 1 && <PurchaseButton cartItems={cartItems} totalAmount={totalAmount} handleCheckout={handleCheckout} />}
      </Drawer>

      <Grid container spacing={3}>
      {isLoading && <LinearProgress />}
      {error && <div>Something went wrong ...</div>}
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4} onClick={()=>{
            setDialogOpen(true);
            setClickCardIndex(item.id)
          }}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
      {dialogOpen && data && (
        <CheeseDetails
          open={dialogOpen}
          setOpen={setDialogOpen}
          cheeseItem={data[clickCardIndex-1]} 
        />
      )}
    </Wrapper>

  );
};

export default App;
