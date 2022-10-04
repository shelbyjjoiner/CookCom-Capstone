//this module has the responsibility of displaying a neighbor's profile
//w details such as name, address, and what they have created

import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export const Profile = () => {
    //provide state variables 
    const [profile, updateProfile] = useState({
        name: "",
        address: "",
        recipes: ""

    })

    const [recipe, updateRecipe] = useState([])
    const localCookUser = localStorage.getItem("cook_user")
    const cookUserObject = JSON.parse(localCookUser)

    const navigate = useNavigate()



    //fetch call from neighbors,usersid 
    useEffect(
        () => {
            fetch(`http://localhost:8088/neighbors?_expand=user&userId=${cookUserObject.id}`)
                .then(response => response.json())
                .then((profileObject) => {
                    updateProfile(profileObject[0])
                })
        },
        []
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/recipes?_expand=userId&userId=${cookUserObject.id}`)
                .then(response => response.json())
                .then((recipeObject) => {
                    updateRecipe(recipeObject)
                })
        },
        []
    )

    //create http to delete / edit recipes 
    const deletedRecipe = (recipe) => {
        recipe.approved = true
        fetch(`http://localhost:8088/recipes/${recipe.id}`, {
            method: "DELETE",
        })

            .then(response => response.json())
            .then(() => {
                deletedRecipe()
            })
    }



    return (
        <>
            <form className="profile" >
                <div> Hello, {profile?.user?.name}! </div>
            </form>
            <fieldset>
                <form className="user-recipe">
                    <div>Your Recipes</div>
                    {
                        recipe.map(
                            (recipe) => {
                                return <section className="list_recipes" key={`recipe--${recipe.id}`}>
                                    <header>{recipe.name}</header>
                                    <header>{recipe.summary}</header>
                                    <footer><button className="button-23" role="button" onClick={() => {
                                        navigate(`/profile/edit_recipe/${recipe.id}`)
                                    }}
                                    >Edit</button>
                                        <button className="button-23" role="button" onClick={(clickEvent) => {
                                            deletedRecipe(recipe)
                                        }}
                                        >Delete</button>
                                    </footer>
                                </section>
                            }
                        )
                    }


                </form>
            </fieldset>
            <fieldset>
                <form className="address">
                    <footer> You are creating masterpieces at {profile.address} </footer>
                </form>
            </fieldset>
        </>
    )
}