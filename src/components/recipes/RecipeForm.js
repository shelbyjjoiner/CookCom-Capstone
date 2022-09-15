//the responsibility of this module is to display a new recipe form
//and have the user be able to submit said new recipe to admin 

import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const RecipeForm = () => {

    //default properties to state object 
    const [recipe, update] = useState({
        courseId: "",
        name: "",
        description: "",
        approved: false
    })

    //bring about use navigation to redict user to recipe list 
    const navigate = useNavigate()

    const localCookUser = localStorage.getItem("cook_user")
    const cookUserObject = JSON.parse(localCookUser)

    //onchange button
    const handleSaveButtonClick = (event) => {
        event.preventDefault


        //create the object to be saved to the api 
        const recipeToSendToAPI = {
            userId: cookUserObject.id,
            name: recipe.name,
            courseId: parseInt(recipe.courseId),
            description: recipe.description,
            approved: recipe.approved
        }


        //perform the fetch() to [OST the object to the API 
        return fetch(`http://localhost:8088/recipes?_expand=course`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipeToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate()
            })
    }
}