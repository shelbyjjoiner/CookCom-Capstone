//this module has the responsibility of displaying the neighborlist module w the exception of showing the delete button

import { useEffect, useState } from "react"
import { NeighborDelete } from "./NeighborDelete"


export const AdminViewNeighbors = () => {
    //set up state variables 
    const [neighbors, setNeighbors] = useState([])
    const [admins, setAdmins] = useState([])


    //fetch all users that are not admins
    useEffect(
        () => {
            fetch(`http://localhost:8088/users?isAdmin=false`)
                .then(response => response.json())
                .then((neighborArray) => {
                    setNeighbors(neighborArray)
                })
        },
        []
    )




    return <>
        <article className="chefs">
            {

                neighbors.map(neighbor => <NeighborDelete key={`neighbor--${neighbor.id}`}
                    id={neighbor.id}
                    name={neighbor.name} />)

            }
        </article>
    </>

}
