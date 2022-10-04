//responsibility of this module is to create/display homepage
//display chef of the week and neighborhood cooking tips 
import { useEffect, useState } from "react"
import "./Homepage.css"

export const Homepage = () => {

    //create state variable that bring in neighbor chef of the week
    const [neighbor, updateNeighbor] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/neighbors?isChefOfTheWeek=true&_expand=user`)
                .then(response => response.json())
                .then((neighborArray) => {
                    updateNeighbor(neighborArray[0])
                })
        },
        []
    )




    return <>
        <form className="homepage">
            <h1>Welcome to CookCom</h1>
            <div>your friendly neighborhood cooking community!</div>
        </form>

        <article className="chefoftheweek">
            <form className="chefcontainer">
                <div> Congratulations to {neighbor?.user?.name} for being this week's Chef Of The Week!</div>
            </form>
        </article>
        <article className="tips">
            <header>This Week's Neighborhood Tips</header>
            <form className="tipoftheweek">
                <ol>Don't skip soaking the calamari in the salted milk when making fried calamari. This helps tenderize the calamari while also taming the fishy taste!</ol>
                <ol>Always heavily salt your pasta water in the pot when making homemade chicken alfredo!</ol>
                <ol>Remember to keep a pan lid or a cookie sheet nearby. Use it to cover the pan if it catches on fire. This will put out the fire. Leave the pan covered until it is completely cooled.</ol>
            </form>
        </article>
    </>


}