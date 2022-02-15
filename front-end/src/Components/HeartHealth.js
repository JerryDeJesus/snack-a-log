import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth(snackHealth) {
  if(snackHealth == true) {
    return <h4><img className = "heart" src = {heartSolid} alt = "healthy food" /></h4>
  } else {
    return <h4><img className = "heart" src = {heartOutline} alt = "unhealthy food"  /></h4>
  }
}

export default HeartHealth;
