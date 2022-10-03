import React from 'react'
import Logo from "../assets/logo.png";
import styles from "./style.module.css";

function Header() {
  return (
    <header className={styles.headerClass}>
    <div className={styles.categoryList}>
        <img src={Logo} alt="logo"/>
        <form>
            <input type="text" placeholder="Digitar Pesquisa"></input>
            <button className='btn absolute' type="button">Pesquisar</button>
        </form>
    </div>
    </header>
  )
}

export default Header