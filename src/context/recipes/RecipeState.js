import RecipeContext from "./recipeContext";
import { useState } from "react";

const RecipeState = (props) => {
    const host = "http://localhost:8000";

    const recipeInitial = [];

    const [recipe, setRecipe] = useState(recipeInitial);

    //Get all recipes
    const getRecipes = async () => {
        //API CALL
        const response = await fetch(`${host}/api/ciyRecipe/fetchallrecipe`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();
        setRecipe(json);
    }

    return (

        <RecipeContext.Provider value={{ recipe, getRecipes }}>
            {props.children}
        </RecipeContext.Provider>
    )

}

export default RecipeState;