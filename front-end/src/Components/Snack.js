import { Link } from "react-router-dom";
import HeartHealth from "./HeartHealth.js";

function Snack({snack}) {
    let {name, fiber, protein, added_sugar, is_healthy, image, id} = snack;
    return(
        <article className="Snack">
            <div>
                <h4><img src = {image} alt = {name} /></h4>
                <h4>{name}</h4>
                <h4>Fiber: {fiber}</h4>
                <h4>Protein: {protein}</h4>
                <h4>Added Sugar: {added_sugar}</h4>
                {HeartHealth(is_healthy)}
                <button><Link to = {`/snacks/${id}`}>Details</Link></button>
            </div>
        </article>
    )
}

export default Snack;