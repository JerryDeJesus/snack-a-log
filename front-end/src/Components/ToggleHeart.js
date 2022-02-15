import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function ToggleHeart({snack, handleHeartChange}) {
    return(
        <div>
           {snack.is_healthy ? (<img id = "healthy" src = {heartSolid} alt = "healthy food" onClick = {() => handleHeartChange()} />) 
                    : (<img id = "unhealthy" src = {heartOutline} alt = "unhealthy food" onClick = {() => handleHeartChange()} />)
           }
        </div>
    )
}

export default ToggleHeart;