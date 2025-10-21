import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Wireless Earbuds"
          price={49.99}
          description="Compact Bluetooth earbuds with clear sound."
        />
        <ProductItem
          title="Smartwatch"
          price={129.0}
          description="Track fitness, sleep, and notifications easily."
        />
        <ProductItem
          title="Portable Speaker"
          price={39.5}
          description="Powerful sound in a pocket-sized design."
        />
        <ProductItem
          title="Gaming Mouse"
          price={59.0}
          description="High precision and RGB lighting for gamers."
        />
      </ul>
    </section>
  );
};

export default Products;
