import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


//the responsibility of this module is to set up how the neighborslist will be displayed
export const NeighborDelete = ({ id, name }) => {
    const [admins, setAdmins] = useState([])


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

    ///create delete http request 
    const deleteUser = (id) => {
        fetch(`http://localhost:8088/users/${id}`, {
            method: "DELETE",
        })
            .then(response => response.json())
            .then(() => {

            })
    }


    return <section className="neighbor">
        <div>
            <Link to={`/neighborprofile/${id}`}>{name}
                <button onClick={(clickEvent) => {
                    deleteUser(id)
                }}>Delete Neighbor</button></Link>
        </div>

    </section>
}