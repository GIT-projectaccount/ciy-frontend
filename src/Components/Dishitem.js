import React,{useContext} from 'react'
import {Link} from "react-router-dom"
import recipeContext from '../context/recipes/recipeContext';


const Dishitem = (props) => {

    const context = useContext(recipeContext);
    const { saveDish} = context;

    const { recipe } = props;

    const handleDishpage = (e) => {
        e.preventDefault();
        saveDish(recipe);
        console.log(recipe);
    }

    return (
        <>
            <div className="d-flex justify-content-start mx-2 col">
                <div className="card dishitem-card">
                    <div className="card-body">
                        <img src={recipe.image} className="dishitem-card-img" alt="..." />
                    </div>
                    <div className="dishitem-title-container">
                        <h5 className="card-title dishitem-card-title" onClick={handleDishpage}> <Link to="/dishpage"> {recipe.title} </Link> </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dishitem
