//the responsibility of this module is to view all courses of recipes

import { useEffect, useState } from "react"
import "./recipes.css"

export const NeighborCookBook = () => {
    const [recipes, setRecipes] = useState([])
    const [filteredRecipe, updateFilteredRecipe] = useState([])
    const [courses, setCourses] = useState([])
    const [selectedCourse, setSelectedCourse] = useState([])
    const [approved, setApproved] = useState([])
    const localCookUser = localStorage.getItem("cook_user")
    const cookUserObject = JSON.parse(localCookUser)


    //set up to fetch recipe data from api 
    useEffect(
        () => {
            fetch(`http://localhost:8088/recipes?_expand=course&approved=true`)
                .then(response => response.json())
                .then((recipeArray) => {
                    setRecipes(recipeArray)
                })


            fetch(`http://localhost:8088/courses`)
                .then(response => response.json())
                .then((courseArray) => {
                    setCourses(courseArray)
                })
        },
        []
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/recipes?_expand=course&courseId=${selectedCourse}&approved=true`)
                .then(response => response.json())
                .then((smallRecipeArray) => {
                    updateFilteredRecipe(smallRecipeArray)
                })
        },
        [selectedCourse]
    )





    //jsx jsx jsx jsx jsx
    return (
        <>

            <h2> What Recipe Are You Looking For? </h2>

            <article className="recipes">
                {courses.map(
                    (course) => {
                        return (
                            <>
                                <button value={course.id}
                                    onClick={() => {
                                        setSelectedCourse(course.id)
                                    }}
                                >
                                    {course.mealType}

                                </button>

                            </>
                        )
                    }
                )}

                {filteredRecipe.map(
                    (recipe) => {
                        return <form className="recipe">
                            <header>{recipe.name}</header>
                            {recipe.summary}
                        </form>


                    }
                )}






            </article >
        </>
    )
}