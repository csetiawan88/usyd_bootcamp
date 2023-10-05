import Yellow from "../images/yellow-robot.png";
import Blue from "../images/blue-robot.png";

export const boxClick = () => {
  const box = document.getElementById("box");
  if (box.src === Red) {
    box.src = Blue;
  } else {
    box.src = red;
  }
};
