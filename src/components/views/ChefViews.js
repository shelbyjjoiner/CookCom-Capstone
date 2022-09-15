//this module has the responsibility of showing what the homepage will look like for chefs/neighbors

//do necessary imports 
import { Outlet, Route, Routes } from "react-router-dom"
import { AboutPage } from "../about/aboutPage"
import { NeighborsList } from "../chefs /NeighborsList"
import { Profile } from "../chefs /ProfilePage"
import { NeighborCookBook } from "../recipes/NeighborCookbook"
import { RecipeForm } from "../recipes/RecipeForm"

export const ChefViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Welcome to Cookcom!</h1>
                    <div>Your friendly neighborhood cooking community!</div>

                    <Outlet />
                </>
            }>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/neighbors" element={<NeighborsList />} />
                <Route path="/cookbook" element={<NeighborCookBook />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/create" element={<RecipeForm />} />
            </Route>
        </Routes>
    )
}