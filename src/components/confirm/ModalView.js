import { useRecoilValue, useSetRecoilState } from "recoil";
import PhotoCar from "../PhotoCarInfo/PhotoCar";
import {
  openModalCamera,
  openModalThankYou,
  openModalView,
} from "./confirm.atom";
import { Button } from "antd";
import ModalThankYou from "./ModalThankYou";
import uploadApi from "@/api/uploadApi";
import ModalCamera from "./ModalCamera";

export default function ModalView({ id, token, dataListImage, mutate }) {
  const isViewModal = useRecoilValue(openModalView);
  const setCompleteCase = useSetRecoilState(openModalThankYou);
  const isViewCamera = useRecoilValue(openModalCamera);

  const isAllValidate =
    dataListImage &&
    dataListImage.length === 6 &&
    dataListImage.every((item) => item.status === "VALID");

  const getSlotData = (slot, dataListImage) =>
    dataListImage && dataListImage.length > 0
      ? dataListImage.find((item) => item.slot === slot)
      : null;

  const slots = [
    "FONT",
    "REG_STAMP",
    "FONT_LEFT",
    "FONT_RIGHT",
    "BACK_LEFT",
    "BACK_RIGHT",
    "FRONT",
  ];

  const [
    slotFont,
    slotStamp,
    slotFontLeft,
    slotFontRight,
    slotBackLeft,
    slotBackRight,
  ] = slots.map((slot) => getSlotData(slot, dataListImage));

  const handleComplete = async () => {
    try {
      await uploadApi.submitInsurance(id, token);
      setCompleteCase(true);
    } catch (e) {
      console.log(e);
    }
  };

  if (!isViewModal) return null;

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-10 overflow-auto bg-white">
      <div className="width-layout my-0 w-full">
        <div className="bg-[#f9f9f9] p-2">
          <p className="text-sm py-2">
            Chụp ảnh 6 góc xe theo các vị trí minh họa:
          </p>
          <div className="grid grid-cols-2 gap-3">
            <PhotoCar
              imgSrc="/head.png"
              text="Đầu xe và biển"
              data={slotFont}
              slot="FONT"
            />
            <PhotoCar
              imgSrc="/stamp.png"
              text="Tem đăng kiểm"
              data={slotStamp}
              slot="REG_STAMP"
            />
            <PhotoCar
              imgSrc="/right.png"
              text="Đầu phải và biển"
              data={slotFontRight}
              slot="FONT_RIGHT"
            />
            <PhotoCar
              imgSrc="/tail.png"
              text="Đuôi phải và biển"
              data={slotBackRight}
              slot="BACK_RIGHT"
            />
            <PhotoCar
              imgSrc="/headleft.png"
              text="Đầu trái và biển"
              data={slotFontLeft}
              slot="FONT_LEFT"
            />
            <PhotoCar
              imgSrc="/tailleft.png"
              text="Đuôi trái và biển"
              data={slotBackLeft}
              slot="BACK_LEFT"
            />
          </div>
        </div>
        <div className=" flex justify-center pt-4 pb-6 box-shadow-line width-layout bg-white z-10 ">
          <Button
            className=" no-underline text-white w-[300px] mx-6 font-light flex justify-center gap-1 items-center"
            size="large"
            block
            type="primary"
            onClick={handleComplete}
            disabled={!isAllValidate}
          >
            Hoàn thành
          </Button>
        </div>
      </div>
      {isViewCamera && <ModalCamera id={id} token={token} mutate={mutate} />}
      <ModalThankYou />
    </div>
  );
}
