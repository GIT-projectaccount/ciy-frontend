import RecipeContext from "./recipeContext";
import { useState } from "react";

const RecipeState = (props) => {

    const dishInitial = [];
    
    const [dish, setDish] = useState(dishInitial);

    const saveDish = (dish) => {
        setDish(dish);
    }

    return (

        <RecipeContext.Provider value={{ dish , saveDish }}>
            {props.children}
        </RecipeContext.Provider>
    )

}

export default RecipeState;