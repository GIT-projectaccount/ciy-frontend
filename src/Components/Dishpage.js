import React, { useContext } from 'react'
import recipeContext from '../context/recipes/recipeContext';

const Dishpage = (props) => {

    const context = useContext(recipeContext);
    const { dish } = context;
    console.log(dish);

    return (
        <>
            <div className="d-flex align-items-center justify-content-center master-heading-container">
                <h1 className="categories-master-heading"> {dish.title} </h1>
            </div>
            <div className="container">
                <img src={dish.image} alt="..." height="150rem" width="150rem" />
                <h3>{dish.description}</h3>
                <h3>{dish.ingredients}</h3>
                <h3>{dish.steps}</h3>
            </div>
        </>
    )
}

export default Dishpage