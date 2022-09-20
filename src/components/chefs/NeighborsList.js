
import { useEffect, useState } from "react";
import { Neighbors } from "./Neighbors";

export const NeighborsList = () => {
    //set up state variables 
    const [neighbors, setNeighbors] = useState([])


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

                neighbors.map(neighbor => <Neighbors key={`neighbor--${neighbor.id}`}
                    id={neighbor.id}
                    name={neighbor.name} />)

            }
        </article>
    </>

}
