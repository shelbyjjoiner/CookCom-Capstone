import { Link, useNavigate } from "react-router-dom"
import "./Nav.css"

export const ChefNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <ol className="navbar__item active">
                <Link className="navbar__link" to="/about">About Us</Link>
            </ol>
            <ol className="navbar__item active">
                <Link className="navbar__Link" to="/neighbors">Your Neighbors</Link>
            </ol>
            <ol className="navbar__item active">
                <Link className="navbar__Link" to="/cookbook">Neighbor Cookbook</Link>
            </ol>
            <ol className="navbar__item active">
                <Link className="navbar__Link" to="/profile">Profile</Link>
            </ol>
            <ol className="navbar__item active">
                <Link className="navbar__Link" to="/create">New Recipe</Link>
            </ol>
            {
                //building link for logout Link
                localStorage.getItem("cook_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__Link" to="" onClick={() => {
                            localStorage.removeItem("cook_user")
                            navigate("/", { replace: true })
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>

    )
}