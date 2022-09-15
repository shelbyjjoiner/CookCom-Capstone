//this module has the responsibility of displaying a neighbor's profile
//w details such as name, address, fav recipe, and what they have created

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Neighbors } from "./Neighbors"

export const Profile = () => {
    //set state variable 


    const [neighbors, setNeighborProfile] = useState([])
    const [user] = useState([])


    //bring in specific neighbor from api w/ fetch call 
    useEffect(
        () => {
            fetch(`http://localhost:8088/neighbors?userId=${user.id}`)
                .then(response => response.json())
                .then((neighborArray) => {
                    setNeighborProfile(neighborArray[0])
                })
        },
        []
    )
    ///jsx for profile page to show name, address, favrecipe, and recipe posts
    return <>
        <article className="profilePage">
            <h2>Your Profile Page</h2>
            {
                neighbors.map(neighbor => <Neighbors key={`neighbor--${neighbor.id}`}
                //need an object to display properties 

                />)

            }
        </article>
    </>


}