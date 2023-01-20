import React from 'react'
import classes from './CartItem.module.css'

const CartItem = (props) => {
    let itemName = props.item;
    return (
        <div className={classes.cart}>

        
                <li>{itemName.name}</li>
                
     
            <p>{itemName.price} </p>

            <button onClick={props.onRemove}>remove item</button>
            {/* <button>+</button> */}

        </div>
    )
}

export default CartItem