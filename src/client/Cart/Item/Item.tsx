// Types
import { CartItemType } from '../../Type';
// Styles
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
};

const Item: React.FC<Props> = ({ item }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <h3>${item.price}</h3>
    </div>
  </Wrapper>
);

export default Item;
