import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

//Types
import { CartItemType } from '../../Type';

import DetailCard from '../../Components/DetailCard';
import AddToCardButton from '../../Components/AddToCardButton';

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cheeseItem: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

//Define the dialog transition
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children?: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CheeseDetails: React.FC<Props> = ({ open, setOpen, cheeseItem, handleAddToCart }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth='lg'
      >
        {cheeseItem && <DetailCard cheeseItem={cheeseItem}/>}
        {cheeseItem &&  <AddToCardButton cheeseItem={cheeseItem} handleAddToCart={handleAddToCart} />}
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CheeseDetails;