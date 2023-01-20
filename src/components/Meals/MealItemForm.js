import React from 'react'
import Input from '../UI/Input'
import classes from './MealItemForm.module.css'
import { useRef } from 'react'
const MealItemForm = (props) => {

  const enterAmount=useRef();

  const formHandler=(event)=>{
    event.preventDefault();
    
    const enteredInputAmout=+enterAmount.current.value;
    props.onAddToCArt(enteredInputAmout)

  }

  return (
    <form onSubmit={formHandler} className={classes.form}>
        <Input 
        
        label="Quantity" 
        ref={enterAmount}
         input={{
          id:"1",
          type:"number",
          min:"1",
          max:"5",
          step:"1",
          defaultValue:"1"
          
        }}/>
        <button >+ Add</button>
    </form>
  )
}

export default MealItemForm