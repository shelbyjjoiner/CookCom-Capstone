import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


//the responsibility of this module is to set up how the neighborslist will be displayed
export const Neighbors = ({ id, name }) => {
    const [admins, setAdmins] = useState([])

    const localCookUser = localStorage.getItem("cook_user")
    const cookUserObject = JSON.parse(localCookUser)
    //create useeffect that brings admins in 
    useEffect(
        () => {
            fetch(`http://localhost:8088/users?isAdmin=true`)
                .then(response => response.json())
                .then((adminArray) => {
                    setAdmins(adminArray)
                })
        },
        []
    )


    return <section className="neighbor">
        <div>
            <Link to={`/neighborprofile/${id}`}>{name}</Link>
        </div>

    </section>
}