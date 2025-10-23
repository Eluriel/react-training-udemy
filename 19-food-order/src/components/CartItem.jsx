import { useContext } from 'react';
import { currencyFormatter } from '../utils/formatting';
import CartContext from '../store/CartContext';

export default function CartItem({ item }) {
  const cartTxt = useContext(CartContext);

  function handleRemoveItem() {
    cartTxt.removeItem(item.id);
  }

  function handleAddItem() {
    cartTxt.addItem(item);
  }

  return (
    <li className="cart-item">
      <p>
        {item.name} - {currencyFormatter.format(item.quantity * item.price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={handleRemoveItem}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handleAddItem}>+</button>
      </p>
    </li>
  );
}
