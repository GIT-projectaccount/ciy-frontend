import React, { useState, useContext, useEffect } from 'react'
import recipeContext from '../context/recipes/recipeContext';
import Dishitem from './Dishitem';

const Searcheddish = () => {

    const initialState = [];
    const [dishResults, setDishResults] = useState(initialState);

    const context = useContext(recipeContext);
    const { searchedDish } = context;

    // const host = process.env.REACT_APP_BACKEND_HOST;

    useEffect(() => {
        const host = process.env.REACT_APP_BACKEND_HOST;
        const getSearchedDish = async () => {
            //API CALL
            const response = await fetch(`${host}/api/ciyRecipe/searchdish/${searchedDish.title}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await response.json();
            setDishResults(json);
        }

        getSearchedDish();
    }, [searchedDish])
    return (
        <>
            {{ dishResults } && <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-center master-heading-container">
                    <h2 className="categories-master-heading"> Results of {searchedDish.title} </h2>
                </div>
                <div className="d-flex justify-content-start dishes-container row">
                    {dishResults.map((recipe) => {
                        return <Dishitem key={recipe._id} recipe={recipe} />
                    })}
                </div>
            </div>}
        </>
    )
}

export default Searcheddish
