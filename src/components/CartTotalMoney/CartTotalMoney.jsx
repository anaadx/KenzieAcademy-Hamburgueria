import React from 'react'
import './styles.css'

function CartTotalMoney({currentSale, setCurrentSale}) {

  const valores = currentSale.reduce((acc, cur) => acc + cur.price, 0).toFixed(2)

  function removeAll(){
    setCurrentSale([])
  }

  return (
    <div className='totalCart'>
        <div className='totalWrittenCart'>
            <h3>Total</h3>
            <p>R${valores}</p>
        </div>
        <button className='totalButtonCart' type='button' onClick={() => removeAll()}>Remover Todos</button>
    </div>
  )
}

export default CartTotalMoney