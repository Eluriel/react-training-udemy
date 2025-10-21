import { useDispatch, useSelector } from 'react-redux';

import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui';

const CartButton = (props) => {
  const itemsQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();

  function handleCartToggle() {
    dispatch(uiActions.toggle());
  }

  return (
    <button onClick={handleCartToggle} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsQuantity}</span>
    </button>
  );
};

export default CartButton;
