import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


//the responsibility of this module is to set up how the neighborslist will be displayed w delete & chef of the week button
//only permitted for admin use 

export const NeighborDelete = ({ id, name }) => {


    ///create delete http request 
    const deleteUser = (id) => {
        fetch(`http://localhost:8088/users/${id}`, {
            method: "DELETE",
        })
            .then(response => response.json())
            .then(() => {

            })
    }



    //use fetch call to assign neighbor as fetch of the week ?
    useEffect(
        () => {
            fetch(`http://localhost:8088/neighbors/`)
                .then(response => response.json())
                .then()
        }
    )



    return <section className="neighbor">
        <div>
            <Link to={`/neighborprofile/${id}`}>{name}
                <button onClick={(clickEvent) => {
                    deleteUser(id)
                }}>Delete Neighbor</button></Link>
        </div>

    </section>
}