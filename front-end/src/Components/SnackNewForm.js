import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ToggleHeart from "./ToggleHeart";

const API = process.env.REACT_APP_API_URL;

function SnackNewForm() {
    const [snack, setSnack] = useState({
        name: "",
        fiber: 0,
        protein: 0,
        added_sugar: 0,
        is_healthy: false,
        image: ""
    });

    const navigate = useNavigate();

    const handleText = (e) => {
        setSnack({...snack, [e.target.id]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API}/snacks`, snack)
             .then(res => navigate("/snacks"))
             .catch(err => console.log(err))
    };

    const handleHeartChange = () => {
        setSnack({...snack, is_healthy: !snack.is_healthy});
    };

    let {name, fiber, protein, added_sugar, image} = snack;

    return(
        <div>
            <h1>New Snacks</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor = "name">Name</label>
                <input id = "name" value = {name} type = "text" onChange = {handleText} />

            
                <label htmlFor = "fiber">Fiber</label>
                <input id = "fiber" value = {fiber} type = "number" onChange = {handleText} />
            
            
                <label htmlFor = "protein">Protein</label>
                <input id = "protein" value = {protein} type = "number" onChange = {handleText} />
            

                <label htmlFor = "added_sugar">Added Sugar</label>
                <input id = "added_sugar" value = {added_sugar} type = "number" onChange = {handleText} />
            
            
                <label htmlFor = "image">Image</label>
                <input id = "image" value = {image} type = "text" onChange = {handleText} />
            
                <ToggleHeart snack = {snack} handleHeartChange = {handleHeartChange} />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SnackNewForm;