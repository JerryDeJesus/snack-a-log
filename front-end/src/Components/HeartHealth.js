import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth( snackHealth ) {
  if(snackHealth) {
    return <img src = {heartSolid} alt = "healthy food" />
  } else {
    return <img src = {heartOutline} alt = "unhealthy food" />
  }

  // let heartImg = snackHealth ? heartSolid : heartOutline;
  // return  heartImg;
}

export default HeartHealth;
