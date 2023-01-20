import React, { Fragment } from 'react'
import AvailbaleMeals from './AvailbaleMeals'
import SummaryMeals from './SummaryMeals'
import classes from './Meals.module.css'

const Meals = () => {
  return (
    <Fragment>
        <div className={classes.meals}>

        <SummaryMeals/>
        <AvailbaleMeals/>
        </div>
    </Fragment>
  )
}

export default Meals