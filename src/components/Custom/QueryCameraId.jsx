import { useRecoilValue } from "recoil";
import { slotCamera } from "../confirm/confirm.atom";

const QueryCameraId = () => {
  const slot = useRecoilValue(slotCamera);
  let imageLayer = "";

  switch (slot) {
    case "FONT":
      imageLayer = "/head.svg";
      break;
    case "REG_STAMP":
      imageLayer = "";
      break;
    case "FONT_RIGHT":
      imageLayer = "/right.svg";
      break;
    case "BACK_RIGHT":
      imageLayer = "/tail.svg";
      break;
    case "FONT_LEFT":
      imageLayer = "/headleft.svg";
      break;
    case "BACK_LEFT":
      imageLayer = "/tailleft.svg";
      break;
    default:
  }

  return imageLayer;
};

export default QueryCameraId;
