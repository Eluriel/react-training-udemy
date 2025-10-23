import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'Wireless Earbuds',
    price: 12,
    description: 'Compact Bluetooth earbuds with clear sound.',
  },
  {
    id: 'p2',
    title: 'Smartwatch',
    price: 35,
    description: 'Track fitness, sleep, and notifications easily.',
  },
  {
    id: 'p3',
    title: 'Speaker',
    price: 20,
    description: 'Powerful sound in a pocket-sized design.',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
