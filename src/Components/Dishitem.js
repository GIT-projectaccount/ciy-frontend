import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import recipeContext from '../context/recipes/recipeContext';


const Dishitem = (props) => {

    const context = useContext(recipeContext);
    const { saveDish } = context;

    const { recipe } = props;

    const handleDishpage = (e) => {
        e.preventDefault();
        saveDish(recipe);
    }

    return (
        <>
            <div className="d-flex justify-content-center mx-2 col">
                <div className="card dishitem-card">
                    <div className="card-body">
                        <img src={recipe.image} className="dishitem-card-img" alt="..." />
                    </div>
                    <div className="dishitem-title-container">
                        <h5 className="card-title" onClick={handleDishpage}> <Link to="/dishpage" className="dishitem-card-title"> {recipe.title} </Link> </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dishitem
