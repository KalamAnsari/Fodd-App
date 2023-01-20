import React from 'react'
import classes from "./HeaderCartButton.module.css"
import CartContext from '../../store/cart-context';
import { useContext } from 'react';


const HeaderCartButton = (props) => {
 
  const cartCtx=useContext(CartContext);
  
  const {basket}=cartCtx;

  // let {addItems,totalAmount,basket}=cartCtx;

  // console.log(basket,addItems,totalAmount)

  const noOfCartItems=basket.reduce((curentItem ,item)=>{ return curentItem + item},0);
  // console.log(noOfCartItems,"reduce")

  return (
    <button className={classes.button} onClick={props.onClickHandler}>
        <span>cart Icon</span>
        <span>Your cart</span>
        <span style={{backgroundColor:"red", width:"30px" ,color:"white", height:"20px", padding:"5px", borderRadius:"12px",marginTop:"15px"}}>
            {noOfCartItems}
        </span>
        </button>
  )
}

export default HeaderCartButton