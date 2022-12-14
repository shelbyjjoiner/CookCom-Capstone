import { Link, useNavigate } from "react-router-dom"
import "./Nav.css"

export const AdminNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <ol className="navbar__item active">
                <Link className="navbar__Link" to="/about">About Us</Link>
            </ol>
            <ol className="navbar__item active">
                <Link className="navbar__Link" to="/home">Home</Link>
            </ol>
            <ol className="navbar__item active">
                <Link className="navbar__Link" to="/neighbors">Your Neighbors</Link>
            </ol>
            <ol className="navbar__item active">
                <Link className="navbar__Link" to="/cookbook">Neighbor Cookbook</Link>
            </ol>
            <ol className="navbar__item active">
                <Link className="navbar__Link" to="/view">Recipe Submissions</Link>
            </ol>
            {
                //building link for logout link
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