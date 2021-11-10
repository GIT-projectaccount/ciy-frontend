import RecipeContext from "./recipeContext";
import { useState } from "react";

const RecipeState = (props) => {

    const dishInitial = [];
    const [searchedDish, setSearchedDish] = useState({title:""});
    const [dish, setDish] = useState(dishInitial);

   const saveSearchedDish = (x) =>{
        setSearchedDish({title:x});
    }

    const saveDish = (dish) => {
        setDish(dish);
    }

    return (

        <RecipeContext.Provider value={{ dish , saveDish , searchedDish, saveSearchedDish}}>
            {props.children}
        </RecipeContext.Provider>
    )

}

export default RecipeState;