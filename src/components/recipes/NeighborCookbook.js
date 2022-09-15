//the responsibility of this module is to view all courses of recipes

import { useEffect, useState } from "react"

export const NeighborCookBook = () => {
    const [recipe, setRecipes] = useState([])
    const [filteredRecipe, updateFilteredRecipe] = useState([])
    const [selectedCourse, setSelectedCourse] = useState([])
    const localCookUser = localStorage.getItem("cook_user")
    const cookUserObject = JSON.parse(localCookUser)


    //set up to fetch recipe data from api 
    useEffect(
        () => {
            fetch(`http://localhost:8088/recipes?_expand=course`)
                .then(response => response.json())
                .then((recipeArray) => {
                    setRecipes(recipeArray)
                })


            fetch(`http://localhost:8088/courses`)
                .then(response => response.json())
                .then((recipeArray) => {
                    setSelectedCourse(recipeArray)
                })
        },
        []
    )






    //jsx jsx jsx jsx jsx
    return
    <>

        //drop down for select courseId

        //onchange sets courseid
        //useeffect [selectedCourse] has courseId, runs filtered recipe with matching courseId

        <h2> What Recipe Are You Looking For? </h2>

        <article className="recipes">

            <select id="courselist" value={recipe.courseId}
                onChange={(event) => {
                    const copy = { ...recipe }
                    copy.courseId = event.target.value
                    updateFilteredRecipe(copy)
                }} 
          </select>
    </form>
    filteredRecipe.map(
        (recipe) => {
            return <section className="recipe" key={`recipe--${recipe.id}`}>
                <input type="radio" value={recipe.id} />
            </section>
        }
    )
            
        </article >
    </>
}