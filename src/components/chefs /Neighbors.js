import { Link } from "react-router-dom"

//the responsibility of this module is to set up how the neighborslist will be displayed
export const Neighbors = ({ id, name, recipeId }) => {
    return <section className="neighbor">
        <div>
            <Link to={`/neighbors/${id}`}>{name} </Link>
        </div>

    </section>
}