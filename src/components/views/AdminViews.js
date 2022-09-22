///this module has the responsibility of what the chefs/neighbors will see 

//do necessary imports
import { Outlet, Route, Routes } from "react-router-dom"
import { AboutPage } from "../about/aboutPage"
import { AdminViewNeighbors } from "../admins/AdminViewNeighbors"
import { RecipeViews } from "../admins/RecipeViews"
import { Homepage } from "../homepage/Homepage"
import { NeighborProfile } from "../profiles/NeighborProfile"
import { FullRecipe } from "../recipes/fullRecipe"
import { NeighborCookBook } from "../recipes/NeighborCookbook"

export const AdminViews = () => {
    return (
        <Routes>
            <Route>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/neighbors" element={<AdminViewNeighbors />} />
                <Route path="/cookbook" element={<NeighborCookBook />} />
                <Route path="/cookbook/fullrecipe/:recipeId" element={<FullRecipe />} />
                <Route path="/view" element={<RecipeViews />} />
                <Route path="/neighborprofile/:userId" element={<NeighborProfile />} />
                <Route path="/home" element={<Homepage />} />
            </Route>
        </Routes>
    )
}
