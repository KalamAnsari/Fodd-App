import React, { Fragment,useContext } from 'react'
import classes from "./Header.module.css"
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
import CartContext from '../../store/cart-context'

const Header = (props) => {
    // const {data}= useContext(CartContext)


    return (
        <Fragment>

            <div className={classes.header}>
                {/* <h1>{data.name}</h1> */}
                <h1>Meals</h1>

                <HeaderCartButton onClickHandler={props.onShow}/>

            </div>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="" />
            </div>

        </Fragment>
    )
}

export default Header