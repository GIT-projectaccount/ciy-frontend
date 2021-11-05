import React, { useEffect, useState } from 'react'
import Dishitem from './Dishitem';

const Dishes = (props) => {
    const host = "http://localhost:8000";

    const initialrecipestate = [];
    const [recipe, setRecipe] = useState(initialrecipestate);

    //Get all recipes
    const getRecipes = async () => {
        //API CALL
        const response = await fetch(`${host}/api/ciyRecipe/type/subcategory/${props.subcategory}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();
        setRecipe(json);
        console.log(json);
    }


    useEffect(() => {
        getRecipes();
        //eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-center master-heading-container">
                    <h2 className="categories-master-heading"> {props.subcategory} </h2>
                </div>
                <div className="d-flex justify-content-start dishes-container">
                    {recipe.map((recipe) => {
                        return <Dishitem key={recipe._id} recipe={recipe} />
                    })}
                </div>
            </div>
            
        </>
    )
}

export default Dishes
