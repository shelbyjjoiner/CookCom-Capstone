///responsibility of this module is to display the neighbors profile from clicking
// on link in neighborlist

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

//should contain their name, address, and their approved recipes 

export const NeighborProfile = () => {
    //set up state variable 
    const [neighbor, updateNeighbor] = useState([])
    const [recipe, updateRecipe] = useState([])
    const { userId } = useParams()

    //create fetch to get neighbors 
    useEffect(
        () => {
            fetch(`http://localhost:8088/neighbors/${userId}`) //$userid
                .then(response => response.json())
                .then((userIdArray) => {
                    updateNeighbor(userIdArray)
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
        }
    )
    return <>
        <form className="neighbor_profile" >
            <header>Welcome to {neighbor?.user?.name}'s Page! </header>
            <div>{neighbor.address} </div>
        </form>
        <fieldset>
            <form className="recipe">
                <label htmlFor="recipe">Neighbor Recipes</label>
                {
                    recipe.map(
                        (recipe) => {
                            return <section className="list_recipes" key={`recipe--${recipe.id}`}>
                                <header> {recipe.name}</header>
                                {recipe.summary}
                            </section>
                        }
                    )
                }


            </form>
        </fieldset>
    </>


}