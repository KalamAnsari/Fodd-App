import React from 'react'
import MealItemForm from './MealItemForm'
import classes from './MealItems.module.css'

import { useContext } from 'react';

import CartContext from '../../store/cart-context';

const MealItems = (props) => {


  const Cartctx = useContext(CartContext)

  const cartAddHAndler=amount=>{
      Cartctx.addItems({
        id:props.id,
        totalItem:amount,
        name:props.name,
        price:props.price
      })

  }


    let price=`$${props.price}`
  return (
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm onAddToCArt={cartAddHAndler}/>
        </div>
    </li>
  )
}

export default MealItems