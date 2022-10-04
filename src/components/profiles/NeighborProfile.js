///responsibility of this module is to display the neighbors profile from clicking
// on link in neighborlist

import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import "./profile.css"

//should contain their name, address, and their approved recipes 

export const NeighborProfile = () => {
    //set up state variable 
    const [neighbor, updateNeighbor] = useState([])
    const [recipe, updateRecipe] = useState([])
    const { userId } = useParams()

    //create fetch to get neighbors 
    useEffect(
        () => {
            fetch(`http://localhost:8088/neighbors?_expand=user&userId=${userId}`) //$userid
                .then(response => response.json())
                .then((userIdArray) => {
                    updateNeighbor(userIdArray[0])
                })
        },
        [userId]
    )

    //create fetch to get recipes from api
    useEffect(
        () => {
            fetch(`http://localhost:8088/recipes?_expand=userId&userId=${userId}`)
                .then(response => response.json())
                .then((recipeArray) => {
                    updateRecipe(recipeArray)
                })
        },
        []
    )

    return <>
        <form className="neighbor_profile" >
            <header>Welcome to {neighbor?.user?.name}'s Page! </header>

        </form>
        <fieldset>
            <form className="neighbor--recipe">
                <label htmlFor="recipe">Neighbor Recipes</label>
                {
                    recipe.map(
                        (recipe) => {
                            return <section className="list_recipes" key={`recipe--${recipe.id}`}>
                                <header>{recipe.name}</header>
                                <header>{recipe.summary}</header>
                                <header><Link to={`/cookbook/fullrecipe/${recipe.id}`}><button className="button-23" role="button"

                                >Full Recipe</button></Link>
                                </header>
                            </section>
                        }
                    )
                }


            </form>
        </fieldset>
        <fieldset>
            <form className="address">
                <footer>If you have any questions, please stop by at {neighbor.address}!</footer>
            </form>
        </fieldset>
    </>


}