import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import heartHealth from "./HeartHealth.js";

const API = process.env.REACT_APP_API_URL;

function SnackDetails() {
    const [snack, setSnack] = useState([]);
    let {id} = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/snacks/${id}`)
             .then(res => setSnack(res.data.payload))
             .catch(err => console.log(err))
    }, [id]);

    const handleDelete = () => {
        axios.delete(`${API}/snacks/${id}`)
             .then(res => navigate("/snacks"))
             .catch(err => console.log(err))
    };

    let {name, fiber, protein, added_sugar, is_healthy, image} = snack;

    return(
        <article>
            <div>
                <h5>{name}</h5>
                <img src = {image} alt = {name} />
                <h6>Protein: {protein}</h6>
                <h6>Fiber: {fiber}</h6>
                <h6>Added Sugar: {added_sugar}</h6>
                <h4>Healthy? {is_healthy ? "True" : "False"}</h4>
                <img src={heartHealth(is_healthy)} alt="heart_image" />
            </div>
            <div className="showNavigation">
                <div><Link to = {"/snacks"}><button>Back</button></Link></div>
                <div><Link to = {`/snacks/${id}/edit`}><button>Edit</button></Link></div>
                <div><button onClick={handleDelete}>Delete</button></div>
            </div>
        </article>
    )

}

export default SnackDetails;