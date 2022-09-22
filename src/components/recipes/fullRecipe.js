//the responsibility of this module is to navigate to a link that displays an 
//image, ingredients, and instructions of the recipe clicked on. 
//link will be proved by a button that says "view full recipe"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const FullRecipe = () => {

    const { recipeId } = useParams()
    const [recipe, updateRecipe] = useState({})

    useEffect(
        () => {
            fetch(`http://localhost:8088/recipes/${recipeId}`)
                .then(response => response.json())
                .then((recipe) => {
                    updateRecipe(recipe)
                })
        }
    )


    return <>
        <header> Learn How To Create {recipe.name}</header>
        <form>
            <fieldset>
                <div className="full_recipe" key={`recipe--${recipe.id}`}>
                    <label htmlFor="summary"> Summary</label>
                    <div>{recipe.summary}</div>
                </div>
            </fieldset>
            <fieldset>
                <div className="full_recipe" key={`recipe--${recipe.id}`}>
                    <label htmlFor="ingredients">Ingredients</label>
                    <div>{recipe.ingredients}</div>
                </div>
            </fieldset>
            <fieldset>
                <div className="full_recipe" key={`recipe--${recipe.id}`}>
                    <label htmlFor="instructions">Instructions</label>
                    <div>{recipe.instructions}</div>
                </div>
            </fieldset>
        </form>

    </>



}