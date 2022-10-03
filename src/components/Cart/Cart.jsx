import React from 'react'
import './styles.css'
import CartProducts from '../CartProducts/CartProducts'
import CartTotalMoney from '../CartTotalMoney/CartTotalMoney'

function Cart({currentSale, setCurrentSale}) {

  function onDelete (itemNovo) {
    const newList = currentSale.filter((item) =>
      item !== itemNovo); 
      setCurrentSale(newList)
  }

  return (
    <div className='containerCart'>
        <div className='titleCart'>
            <h2>Carrinho de Compras</h2>
        </div>
        {currentSale.length === 0 ? (
        <div className='emptyCart'>
            <h3>Sua sacola está vazia</h3>
            <p>Adicione Itens</p>
        </div>
        ) : (
          <>
          <ul className='ulCart'>
          {currentSale.map((item) => {
        const itemId = Math.round(Math.random() * 1000)
          return <CartProducts
          item={item}
          onDelete={onDelete}
          key={itemId}/>
          })}
          </ul>
          <CartTotalMoney currentSale={currentSale}/>
          </>
)}
    </div>
  )
}

export default Cart