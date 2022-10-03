import React from 'react'
import './styles.css'

function CartProducts({item, onDelete}) {
  const itemKey = Math.round(Math.random() * 1000)
  console.log(item)
  return (
    <li className='productCart' id={item.id} key={itemKey}>
      <img className='imgCart' src={item.img} alt='imagem produto'></img>
      <div className='nameCatCart'>
      <h2 className='title1Cart'>{item.name}</h2>
      <p className='text1Cart'>{item.category}</p>
      </div>
      <button className='buttonRemoveCart' onClick={() => {
            onDelete(item);
          }}>remover</button>
    </li>
  )
}

export default CartProducts