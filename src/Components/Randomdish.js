import React, { useEffect, useState } from 'react'
import Dishitem from './Dishitem';

const Randomdish = () => {

    const host = process.env.REACT_APP_BACKEND_HOST;


    const initialrecipestate = [];
    const [recipe, setRecipe] = useState(initialrecipestate);

    //Get all recipes
    const getRandomRecipes = async () => {
        //API CALL
        const response = await fetch(`${host}/api/ciyRecipe/randomdish`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();
        setRecipe(json);
    }

    useEffect(() => {
        getRandomRecipes();
        window.scrollTo(0, 0);
        //eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="d-flex justify-content-center">
                <h3 className="mostpopular-heading"> CIY Recommendations </h3>
            </div>
            <div className="container-fluid">
                <div className="d-flex justify-content-start dishes-container row">
                    {recipe.map((recipe) => {
                        return <Dishitem key={recipe._id} recipe={recipe} />
                    })}
                </div>
            </div>


        </>
    )
}

export default Randomdish
