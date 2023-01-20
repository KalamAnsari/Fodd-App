import React, { useContext } from 'react'
import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {

  const cartCtx=useContext(CartContext);

  let price=cartCtx.items.reduce((total,currentValue)=>{
   return total+currentValue.price
  
  },0)

  const hasPrice=price>0;

  const hasOrder=cartCtx.basket.length > 0

  const addCartItem=(id)=>{

  };

  const removeCartItem=(id)=>{


    cartCtx.removeItem({
      id:id,
    })

  };
 
    const cartItems=( 
        <ul className={classes["cart-items"]}>
            {cartCtx.items.map((item)=>(
                <CartItem item={item} onAdd={addCartItem.bind(null,item)} onRemove={removeCartItem.bind(null,item.id)}/>
            ))}
        </ul>
    );
  return (
    <Modal>
    <div className={classes.totals}>
    {cartItems}
    <div className={classes.total}>

    {hasPrice ? <div> <span>Total Amount :</span> <span style={{color:" rgb(223, 148, 9)"}}> $-{price.toFixed(2)}</span> </div>:"No Any order Please select any food , Thank You"  }

   
    </div>
    <div className={classes.action}>

    <button className={classes["button--alt"]} onClick={props.onClose}>close</button>

   {hasOrder && <button className={classes.button}>order</button> } 
    </div>
    </div>
    </Modal>
  )
}

export default Cart