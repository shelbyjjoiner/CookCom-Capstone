//responsibility is to navigate the user to a form to edit their approved recipe

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./profile.css"

export const EditRecipe = () => {
    const [recipe, update] = useState({
        courseId: "",
        name: "",
        summary: "",
        ingredients: "",
        instructions: ""
    })

    const localCookUser = localStorage.getItem("cook_user")
    const cookUserObject = JSON.parse(localCookUser)

    const { recipeId } = useParams()

    const navigate = useNavigate()
    const [recipeCourses, setRecipeCourses] = useState([])
    //get recipe from api and update state 
    useEffect(
        () => {
            fetch(`http://localhost:8088/recipes?_expand=user&id=${recipeId}`)
                .then(response => response.json())
                .then((recipeArray) => {
                    update(recipeArray[0])
                })
        },
        []
    )
    //get courses from api
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

    const handleSaveButtonClick = (event) => {
        event.preventDefault()


        return fetch(`http://localhost:8088/recipes/${recipe.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipe)
        })

            .then(response => response.json())
            .then(() => {
                navigate("/profile")
            })
    }




    return <>
        <form className="editform" >
            <h2 className="recipeForm__Title"> Edit Recipe</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="label">What Course Is Your Recipe?</label>
                    {
                        recipeCourses.map(
                            (course) => {
                                if (recipe.courseId === course.id) {


                                    return <section className="typeOfCourse" key={`course--${course.id}`}>

                                        <input
                                            onChange={
                                                (evt) => {
                                                    const copy = { ...recipe }
                                                    copy.courseId = course.id
                                                    update(copy)

                                                }

                                            }
                                            type="radio" checked name="courses" value={`${course.id}`} /> {course.mealType}


                                    </section>
                                }
                                else {
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
                        placeholder="List ingredients"
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
                        placeholder="Instructions Here"
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
                Submit Revision
            </button>
        </form>
    </>

}