import './App.css';
import '../src/styles/index.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import List from './components/List/List';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';


function App() {

const [products, setProducts] = useState([]);
// const [filteredProducts, setFilteredProducts] = useState([]);
const [currentSale, setCurrentSale] = useState([])

useEffect(() => {
  fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
  .then((response) => response.json())
  .then((response) => setProducts(response))
  .catch((err) => console.log(err));
}, [])

function handleClick(productId){
  const selectedProduct = products.find(element => element.id === productId)
  if(currentSale.includes(selectedProduct)){
    toast.error('Item já foi adicionado!');
  }else{
    setCurrentSale([...currentSale, selectedProduct])
  }
}

  return (
    <div className="App">
      <Header/>
      <div className="container">
      <main>
       <List products={products} handleClick={handleClick}/>
       <Cart currentSale={currentSale} setCurrentSale={setCurrentSale}/>
      </main>
      </div>
      <Toaster/>
    </div>
  );
}

export default App;
