import React, { useReducer } from 'react'
import CartContext from './cart-context'


const defaultCartState = {
    basket: [],
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {


    switch (action.type) {
        case "ADD": return {
            basket: [...state.basket, action.item.totalItem],
            items: [...state.items, action.item],
            totalAmount: state.totalAmount + action.item.price
        }
        case "REMOVE":
            let newbasket = [...state.basket];

            let newItems = [...state.items];

            const index = state.items.findIndex((item) => item.id === action.item.id);



            if (index >= 0) {
                newItems.splice(index, 1);
                newbasket.splice(index, 1)
            } else {
                console.log("item does not exxits")
            }


            return {
                ...state,
                items: newItems,
                basket: newbasket,

            };
            default: return defaultCartState;
    }

};

const CartProvider = (props) => {

    const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState);


    const addItemHandler = item => {
        dispatchAction({
            type: "ADD",
            item: item

        })
    };

    const removeItemhandler = id => {

        dispatchAction({
            type: "REMOVE",
            item: id,
        })
    };

    // const data = {
    //     name: "Meals"
    // };

    const cartContext = {
        basket: cartState.basket,
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItems: addItemHandler,
        removeItem: removeItemhandler,
    }

    // return <CartContext.Provider value={{ cartContext, data }}>  // add to more value
    return <CartContext.Provider value={cartContext}>

        {props.children}
    </CartContext.Provider>
}

export default CartProvider