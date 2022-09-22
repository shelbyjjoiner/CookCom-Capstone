///this module has the responsibility of what the chefs/neighbors will see 

//do necessary imports
import { Outlet, Route, Routes } from "react-router-dom"
import { AboutPage } from "../about/aboutPage"
import { RecipeViews } from "../admins/RecipeViews"
import { NeighborsList } from "../chefs/NeighborsList"
import { NeighborProfile } from "../profiles/NeighborProfile"
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
                <Route path="/neighbors" element={<NeighborsList />} />
                <Route path="/cookbook" element={<NeighborCookBook />} />
                <Route path="/view" element={<RecipeViews />} />
                <Route path="/neighborprofile/:userId" element={<NeighborProfile />} />

            </Route>
        </Routes>
    )
}
