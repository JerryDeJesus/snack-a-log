import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({ snackHealth }) {
  const heartChange = () => {
    console.log(snackHealth);
  }
  return (
    <>
      <p>{heartChange}</p>
    </>
  );
}

export default HeartHealth;
