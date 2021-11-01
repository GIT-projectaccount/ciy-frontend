import RecipeContext from "./recipeContext";
import { useState } from "react";

const RecipeState = (props) => {
    const host = "http://localhost:8000";

    const recipeInitial = [];

    const [recipe, setRecipe] = useState(recipeInitial);
    const [breakfast, setBreakfast] = useState(recipeInitial);

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

    //Get breakfast
    const getBreakfast = async () => {
        //API CALL
        const response = await fetch(`${host}/api/ciyRecipe/breakfast`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();
        setBreakfast(json);
    }
    

    return (

        <RecipeContext.Provider value={{ recipe, getRecipes,breakfast,getBreakfast }}>
            {props.children}
        </RecipeContext.Provider>
    )

}

export default RecipeState;