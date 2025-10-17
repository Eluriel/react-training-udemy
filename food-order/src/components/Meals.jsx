import MealItem from './MealItem';

export default function Meals({ meals }) {
  return (
    <ul id="meals">
      {meals.map((item) => (
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
