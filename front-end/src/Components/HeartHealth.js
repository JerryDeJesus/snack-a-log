import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth( snackHealth ) {
  let heartImg = snackHealth ? heartSolid : heartOutline;
  return  heartImg ;
}

export default HeartHealth;
