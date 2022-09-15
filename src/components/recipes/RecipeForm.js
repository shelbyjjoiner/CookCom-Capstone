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

    //create state variables for recipes/courses
    const [recipeCourses, setRecipeCourses] = useState([])

    //useeffect to observe state of recipeCourses by fetching courses from api
    useEffect(
        () => {
            fetch(`http://localhost:8088/courses`)
                .then(respone => response.json())
                .then((coursesArray) => {
                    setRecipeCourses(coursesArray)
                })
        },
        []
    )

    //bring about use navigation to redirect user to recipe list 
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
        })


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
                navigate("/recipes")
            }
            ),
            []

    }

    return <>
        <form className="recipe" ></form>
        <h2 className="recipeForm__Title"> New Recipe</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="label">What Course Is Your Recipe?</label>
                {
                    productTypes.map(
                        (type) => {
                            return <section className="typeOfProduct" key={`type--${type.id}`}>

                                <input
                                    onChange={
                                        (evt) => {
                                            const copy = { ...product }
                                            copy.typeId = type.id
                                            update(copy)

                                        }

                                    }
                                    type="checkbox" value={`${type.id}`} /> {type.type}

                            </section>
                        }

                    )}
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group" key={`recipe--${recipe.id}`}>
                <label htmlFor="Name"></label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="What is the name of your product"
                    value={product.name}
                    onChange={
                        (evt) => {
                            //copy existing state
                            const copy = { ...product }
                            copy.name = evt.target.value
                            update(copy)
                        }
                    } />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="label" >Price of Candy</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="How much is it going to be?"
                    value={product.price}
                    onChange={
                        (evt) => {
                            //copy existing state
                            const copy = { ...product }
                            copy.price = evt.target.value
                            update(copy)

                        }
                    } />
            </div>
        </fieldset>

        <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
            Submit Product
        </button>
    </>
}