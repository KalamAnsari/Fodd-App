import React from 'react'
import Card from '../UI/Card'
import MealItems from './MealItems'

const DummyMeals = [
    {
        id: 1,
        name: "Samosa",
        description: "indean food ",
        price: 12.34
    },
    {
        id: 2,
        name: "Aloo gobi",
        description: "	Cauliflower with potatoes sautéed with garam masala",
        price: 45.34
    },
    {
        id: 3,
        name: "Aloo matar",
        description: "Potatoes and peas in curry food ",
        price: 22
    },
    {
        id: 4,
        name: "Biryani",
        description: "Mixed rice dish, optional spices ",
        price: 55.34
    }
]
const AvailbaleMeals = () => {
    return (
        <section>
            <Card>
                {
                    DummyMeals.map((meals) => <ul>{<MealItems key={meals.id} id={meals.id} name={meals.name} description={meals.description} price={meals.price} />}</ul>)
                }
            </Card>
        </section>
    )
}

export default AvailbaleMeals