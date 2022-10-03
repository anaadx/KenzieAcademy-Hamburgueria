import React from "react";
import styles from "./style.module.css";

function Product({item, handleClick }) {
  const itemId = Math.round(Math.random() * 1000)
  return (
    <li className={styles.product} id={item.id} key={itemId}>
      <img className={styles.cardImg} src={item.img} alt="imagem produto"></img>
      <div className={styles.written}>
        <h2 className="title1Product">{item.name}</h2>
        <p className="text1Product">{item.category}</p>
        <h3 className="text2Product">R${item.price}</h3>
        <button
          className="btn"
          onClick={() => {
            handleClick(item.id);
          }}
        >
          Adicionar
        </button>
      </div>
    </li>
  );
}

export default Product;
