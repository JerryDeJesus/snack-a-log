import { Link } from "react-router-dom";

function Snack({snack}) {
    let {name, fiber, protein, added_sugar, is_healthy, image, id} = snack;
    return(
        <div>
            <img src = {image} alt = {name} />
            <h4>{name}</h4>
            <h4>Fiber: {fiber}</h4>
            <h4>Protein: {protein}</h4>
            <h4>Added Sugar: {added_sugar}</h4>
            <h4>Healthy? {is_healthy ? "True" : "False"}</h4>
            <button><Link to = {`/snacks/${id}`}>Details</Link></button>
        </div>
    )
}

export default Snack;