import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Register = (props) => {
    const [chef, setChef] = useState({
        email: "",
        name: "",
        isAdmin: false
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(chef)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("cook_user", JSON.stringify({
                        id: createdUser.id,
                        staff: createdUser.isAdmin
                    }))
                    const neighbor = {
                        address: chef.address,
                        favoriteRecipeId: chef.recipeId,
                        isChefOfTheWeek: false,
                        userId: createdUser.id

                    }

                    fetch(`http://localhost:8088/neighbors`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(neighbor)
                    })
                }
                navigate("/")
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${chef.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updateChef = (evt) => {
        const copy = { ...chef }
        copy[evt.target.id] = evt.target.value
        setChef(copy)
    }




    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for CookCom</h1>
                <fieldset>
                    <label htmlFor="name"> Full Name </label>
                    <input onChange={updateChef}
                        type="text" id="name" className="form-control"
                        placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateChef}
                        type="email" id="email" className="form-control"
                        placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="address"> Street Address </label>
                    <input onChange={updateChef}
                        type="address" id="address" className="form-control"
                        placeholder="Street address" required />
                </fieldset>
                <fieldset>
                    <input onChange={(evt) => {
                        const copy = { ...chef }
                        copy.isAdmin = evt.target.checked
                        setChef(copy)
                    }}
                        type="checkbox" id="isAdmin" />
                    <label htmlFor="email"> I am an Admin </label>
                </fieldset>
                <fieldset>
                    <button type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
}
