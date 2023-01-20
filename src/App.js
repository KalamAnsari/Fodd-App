import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layouts/Header';
import Meals from './components/Meals/Meals';
import { useState } from 'react';
import CartProvider from './store/CartProvider';

function App() {
  const [cartShow, setCartShow] = useState(false)
  
  const showCartHandler=()=>{
       setCartShow(true)
  }
  const hideCartHandler=()=>{
    setCartShow(false)
  }
  return (
    <CartProvider>
      { 
      cartShow && <Cart onClose={hideCartHandler}/>
      
    }
     <Header onShow={showCartHandler}/>
     <main>
      <Meals/>
     </main>
    </CartProvider>
  );
}

export default App;
