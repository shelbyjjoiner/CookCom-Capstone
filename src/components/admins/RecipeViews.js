import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./admin.css"


export const RecipeViews = () => {

    const [recipes, updateRecipe] = useState([])
    const navigate = useNavigate()
    //go thru recipe and display only approved recipes 
    useEffect(
        () => {
            fetch(`http://localhost:8088/recipes?_expand=course&approved=false`)
                .then(response => response.json())
                .then((unapprovedRecipeArray) => {
                    updateRecipe(unapprovedRecipeArray)
                })
        },
        []
    )

    //http request method put to replace function to 'approve' button 
    const saveUpdatedRecipe = (recipe) => {
        recipe.approved = true
        fetch(`http://localhost:8088/recipes/${recipe.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipe)
        })
            .then(response => response.json())
            .then(navigate("/cookbook"))


    }

    //http request method delete to 'delete' recipe button 
    const saveDeletedRecipe = (recipe) => {
        recipe.approved = false
        fetch(`http://localhost:8088/recipes/${recipe.id}`, {
            method: "DELETE",
        })

            .then(response => response.json())
            .then(navigate("/cookbook"))


    }



    return <>
        <form className="submissions">
            <h2 className="submissions">Recipe Submissions</h2>
            {
                recipes.map(
                    (recipe) => {
                        return <section className="recipe" key={`recipe--${recipe.id}`}>
                            <header>{recipe.name}</header>
                            <button onClick={(clickEvent) => {
                                saveUpdatedRecipe(recipe)
                            }}
                            >Approve</button>
                            <button onClick={(clickEvent) => {
                                saveDeletedRecipe(recipe)
                            }}
                            >Deny</button>
                        </section>

                    }
                )
            }


        </form>
    </>


}

