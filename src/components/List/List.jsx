import React from "react";
import Product from "../Product/Product";
import styles from "./style.module.css";

const List = ({ products, filteredProducts, handleClick }) => {
  return (
    <ul className={styles.list}>
      {filteredProducts.length > 0
        ? filteredProducts.map((item) => {
            const itemId = Math.round(Math.random() * 1000);
            return (
              <Product
                key={itemId}
                id={itemId}
                item={item}
                handleClick={handleClick}
              />
            );
          })
        : products.map((item) => {
            const itemId = Math.round(Math.random() * 1000);
            return (
              <Product
                key={itemId}
                id={itemId}
                item={item}
                handleClick={handleClick}
              />
            );
          })}
    </ul>
  );
};

export default List;
