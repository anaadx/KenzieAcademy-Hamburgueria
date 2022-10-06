import React, { useState } from "react";
import Logo from "../assets/logo.png";
import styles from "./style.module.css";

function Header({ filteredProducts, setFilteredProducts, products }) {
  const [search, setSearch] = useState("");

  function diferent(valor) {
    setSearch(valor);
  }

  function filterProducts() {
    
    const produtosFiltrados = products.filter((produto) =>
      produto.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredProducts(produtosFiltrados);
    console.log(filteredProducts);
  }

  return (
    <header className={styles.headerClass}>
      <div className={styles.categoryList}>
        <img src={Logo} alt="logo" />
        <form>
          <input
            type="text"
            placeholder="Digitar Pesquisa"
            onChange={(event) => diferent(event.target.value)}
          ></input>
          <button
            className="btn absolute"
            type="button"
            onClick={() => filterProducts() }
          >
            Pesquisar
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
