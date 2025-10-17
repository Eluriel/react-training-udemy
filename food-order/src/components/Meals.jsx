import { fetchAvailableMeals } from '../http';
import { useFetch } from '../hooks/useFetch';
import MealItem from './MealItem';

export default function Meals({ meals }) {
  const {
    isFetching,
    error,
    fetchedData: availableMeals,
  } = useFetch(fetchAvailableMeals, []);

  return (
    <ul id="meals">
      {availableMeals.map((item) => (
        <MealItem
          name={item.name}
          key={item.id}
          id={item.id}
          price={item.price}
          description={item.description}
          image={item.image}
        />
      ))}
    </ul>
  );
}
