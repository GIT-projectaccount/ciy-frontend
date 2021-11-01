import React ,{useContext,useEffect} from 'react'
import recipeContext from '../context/recipes/recipeContext'

const Dishes = (props) => {

    const context = useContext(recipeContext);
    const { recipe, getRecipes} = context;
    useEffect(() => {
        getRecipes();
    },[])

    return (
        <>
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-center master-heading-container">
                    <h2 className="categories-master-heading"> hi </h2>
                </div>
            </div>
        </>
    )
}

export default Dishes
