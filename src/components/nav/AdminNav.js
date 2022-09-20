import { Link, useNavigate } from "react-router-dom"
import "./Nav.css"

export const AdminNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <ol className="navbar__item active">
                <Link className="navbar__link" to="/about">About Us</Link>
            </ol>
            <ol className="navbar__item active">
                <Link className="navbar__link" to="/neighbors">Your Neighbors</Link>
            </ol>
            <ol className="navbar__item active">
                <Link className="navbar__link" to="/cookbook">Neighbor Cookbook</Link>
            </ol>
            <ol className="navbar__item active">
                <Link className="navbar__link" to="/view">Recipe Submissions</Link>
            </ol>
            {
                //building link for logout button
                localStorage.getItem("cook_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("cook_user")
                            navigate("/", { replace: true })
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>

    )
}