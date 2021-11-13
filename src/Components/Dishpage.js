import React, { useContext } from 'react'
import recipeContext from '../context/recipes/recipeContext';

const Dishpage = () => {

    const context = useContext(recipeContext);
    const { dish } = context;

    return (
        <>
            <div className="d-flex align-items-center justify-content-center master-heading-container">
                <h1 className="categories-master-heading"> {dish.title} </h1>
            </div>
            <div className="container-fluid">
                <div className="d-flex justify-content-evenly">
                    {/* image */}
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={dish.image} className="dishpage-img" alt="..." />
                    </div>
                    {/* description */}
                    <div className="d-flex justify-content-center">
                        <div>
                            <h4 className="dishpage-description-heading"> Description </h4>
                            <p className="dishpage-description">{dish.description}</p>
                        </div>
                    </div>
                </div>
                <div className="dishpage-ingredients-container">
                    <div>
                        <h4 className="dishpage-ingredients-heading"> Ingredients</h4>
                        <p className="dishpage-ingredients">
                            {dish.ingredients.map((item, index) =>
                                <li key={index} className="dishpage-ingredients-list"> <input type="checkbox" className="dishpage-ingredients-checkbox" /> {item} </li>
                            )}
                        </p>
                    </div>
                </div>
                <div className="dishpage-ingredients-container">
                    <div>
                        <h4 className="dishpage-ingredients-heading"> Procedure</h4>
                        <p className="dishpage-ingredients">
                            {dish.steps.map((item, index) =>
                                <li key={index} className="dishpage-ingredients-list"> <input type="checkbox" className="dishpage-ingredients-checkbox" /> {item} </li>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dishpage