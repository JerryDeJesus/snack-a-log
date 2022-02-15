import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({snackHealth, handleHeart}) {
  if(snackHealth) {
    return <h4><img className = "heart" src = {heartSolid} alt = "healthy food" onChange = {() => handleHeart()} /></h4>
  } else {
    return <h4><img className = "heart" src = {heartOutline} alt = "unhealthy food" onChange = {() => handleHeart()} /></h4>
  }
}

export default HeartHealth;
