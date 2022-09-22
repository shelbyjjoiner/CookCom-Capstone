///this module has the responsibility of what the chefs/neighbors will see 

//do necessary imports
import { Outlet, Route, Routes } from "react-router-dom"
import { AboutPage } from "../about/aboutPage"
import { AdminViewNeighbors } from "../admins/AdminViewNeighbors"
import { RecipeViews } from "../admins/RecipeViews"
import { NeighborProfile } from "../profiles/NeighborProfile"
import { FullRecipe } from "../recipes/fullRecipe"
import { NeighborCookBook } from "../recipes/NeighborCookbook"

export const AdminViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Welcome to CookCom!</h1>
                    <div>Your friendly neighborhood cooking community!</div>

                    <Outlet />
                </>
            }>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/neighbors" element={<AdminViewNeighbors />} />
                <Route path="/cookbook" element={<NeighborCookBook />} />
                <Route path="/cookbook/fullrecipe/:recipeId" element={<FullRecipe />} />
                <Route path="/view" element={<RecipeViews />} />
                <Route path="/neighborprofile/:userId" element={<NeighborProfile />} />

            </Route>
        </Routes>
    )
}
