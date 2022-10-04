//the responsibility of this module is to display a new recipe form
//and have the user be able to submit said new recipe to admin 
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const RecipeForm = () => {

    //default properties to state object 
    const [recipe, update] = useState({
        courseId: "",
        name: "",
        summary: "",
        ingredients: "",
        instructions: "",
        userId: 0,
        approved: false
    })

    //create state variables for recipes/courses
    const [recipeCourses, setRecipeCourses] = useState([])

    //useeffect to observe state of recipeCourses by fetching courses from api
    useEffect(
        () => {
            fetch(`http://localhost:8088/courses`)
                .then(response => response.json())
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
        event.preventDefault()


        //create the object to be saved to the api 
        const recipeToSendToAPI = {
            name: recipe.name,
            courseId: parseInt(recipe.courseId),
            summary: recipe.summary,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions,
            userId: parseInt(cookUserObject.id),
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
                navigate("/views")
            }
            ),
            []

    }

    return <>
        <form className="recipeform" >
            <h2 className="recipeForm__Title"> New Recipe</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="label">What Course Is Your Recipe?</label>
                    {
                        recipeCourses.map(
                            (course) => {
                                return <section className="typeOfCourse" key={`course--${course.id}`}>

                                    <input
                                        onChange={
                                            (evt) => {
                                                const copy = { ...recipe }
                                                copy.courseId = course.id
                                                update(copy)

                                            }

                                        }
                                        type="radio" name="courses" value={`${course.id}`} /> {course.mealType}





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
                        placeholder="What is the name of your recipe"
                        value={recipe.name}
                        onChange={
                            (evt) => {
                                //copy existing state
                                const copy = { ...recipe }
                                copy.name = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group" key={`recipe--${recipe.id}`}>
                    <label htmlFor="summary">Summary</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Make it sweet, salty, or spicy"
                        value={recipe.summary}
                        onChange={
                            (evt) => {
                                //copy existing state
                                const copy = { ...recipe }
                                copy.summary = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group" key={`recipe--${recipe.id}`}>
                    <label htmlFor="ingredients">Ingredients</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="What's inside?"
                        value={recipe.ingredients}
                        onChange={
                            (evt) => {
                                //copy existing state
                                const copy = { ...recipe }
                                copy.ingredients = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="label" >Instructions</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="How are you going to make it?"
                        value={recipe.instructions}
                        onChange={
                            (evt) => {
                                //copy existing state
                                const copy = { ...recipe }
                                copy.instructions = evt.target.value
                                update(copy)

                            }
                        } />
                </div>
            </fieldset>

            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Recipe
            </button>
        </form>
    </>
}