import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth( snackHealth ) {
  const heartChange = () => {
    if(snackHealth) <img src = {heartSolid} alt = "healthy food" />
    else <img src = {heartOutline} alt = "unhealthy food" />
  }
  return (
    <>
      <p>{heartChange}</p>
    </>
  );
}

export default HeartHealth;
