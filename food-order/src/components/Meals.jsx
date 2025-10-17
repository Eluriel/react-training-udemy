import { useHttp } from '../hooks/useHttp';
import MealItem from './MealItem';
import ErrorMessage from './ErrorMessage';

const requestConfig = {};

export default function Meals({ meals }) {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp('http://localhost:3000/meals', requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <ErrorMessage title="Failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((item) => (
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
