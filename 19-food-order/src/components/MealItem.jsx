import { useContext } from 'react';
import { currencyFormatter } from '../utils/formatting';
import Button from './UI/Button';
import CartContext from '../store/CartContext';

export default function MealItem({ name, id, price, description, image }) {
  const cartCtx = useContext(CartContext);
  function handleAddMealToCart() {
    cartCtx.addItem({ name, id, price, description, image });
  }
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(price)}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
