import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { CartItemType } from '../App';

//types
type Props = {
  cheeseItem: CartItemType;
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: 60,
      marginLeft: 40,
      marginRight: 40,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      minWidth: 400,

    },
    image: {
      maxWidth: 600,
      maxHeight: 600,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '50%',
      maxHeight: '50%',
    },
  })
);

const DetailCard: React.FC<Props> = ({ cheeseItem }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} src={cheeseItem.image} alt={cheeseItem.title}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {cheeseItem.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Category: {cheeseItem.category}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Description:
                  {cheeseItem.description}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">${cheeseItem.price}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default DetailCard;