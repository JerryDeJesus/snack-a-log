import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth(snackHealth) {
  if(snackHealth) {
    return <h4><img src = {heartSolid} alt = "healthy food" /></h4>
  } else {
    return <h4><img src = {heartOutline} alt = "unhealthy food" /></h4>
  }
}

export default HeartHealth;
