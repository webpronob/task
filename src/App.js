import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {
  const [card,setCard] =useState([])
  const itemProduct =(items,quantity) =>{
    items.quantity =quantity
    const newCard =[...card,items]
    setCard(newCard)
    console.log(newCard)
  }
  return (
    <div className="app">
     <Routes>
        <Route path="/" element={<Home itemProduct = {itemProduct} />} />
        <Route path="/cart" element={<Cart card ={card} />} />
      </Routes>
    </div>
  );
}

export default App;
