import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"


//the responsibility of this module is to set up how the neighborslist will be displayed w delete & chef of the week button
//only permitted for admin use 

export const NeighborDelete = ({ id, name }) => {


    ///create delete http request 
    const deleteUser = (id) => {
        fetch(`http://localhost:8088/users/${id}`, {
            method: "DELETE",
        })
            .then(response => response.json())
            .then(navigate("/neighbors"))
    }

    const [neighbor, updateNeighbor] = useState([])
    const navigate = useNavigate()


    useEffect(
        () => {
            fetch(`http://localhost:8088/neighbors?userId=${id}`)
                .then(response => response.json())
                .then((neighborArray) => {
                    updateNeighbor(neighborArray[0])
                })
        }
    )


    //assign neighbor as chef of the week 
    const AssignChefOfTheWeek = () => {
        const newObject = structuredClone(neighbor)
        newObject.isChefOfTheWeek = !newObject.isChefOfTheWeek

        fetch(`http://localhost:8088/neighbors/${neighbor.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObject)
        })
            .then(response => response.json())
            .then(navigate("/home")

            )

    }



    return <section className="neighbor">
        <div>
            <Link to={`/neighborprofile/${id}`}>{name}</Link>
            <footer><button className="button-23" role="button" onClick={(clickEvent) => {
                deleteUser(id)
            }}>Delete Neighbor</button>
                <button className="button-23" role="button" onClick={(clickEvent) => {
                    AssignChefOfTheWeek(id)
                }}>Chef Of The Week</button>
            </footer>





        </div>

    </section>
}