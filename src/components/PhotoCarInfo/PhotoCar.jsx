import React from "react";
import { lime, gold } from "@ant-design/colors";
import {
  CheckCircleFilled,
  ExclamationCircleFilled,
  CameraFilled,
} from "@ant-design/icons";
import { Button, Image } from "antd";
import { useSetRecoilState } from "recoil";
import {
  openModalCamera,
  slotCamera,
  typePhoto,
} from "../confirm/confirm.atom";

function StatusText({ text, status, timesCallAI }) {
  const realPass = timesCallAI < 3;
  return (
    <p className="text-sm my-4 font-bold">
      <span className="pr-1">
        {status === "VALID" && realPass && (
          <CheckCircleFilled style={{ color: lime[5] }} />
        )}
        {status === "!VALID" && !realPass && (
          <ExclamationCircleFilled style={{ color: gold[5] }} />
        )}
      </span>
      {text}
    </p>
  );
}

export default function PhotoCar({ imgSrc, text, data, slot }) {
  const setModalCamera = useSetRecoilState(openModalCamera);
  const setSlotCamera = useSetRecoilState(slotCamera);
  const setType = useSetRecoilState(typePhoto);
  const timesCallAI  = data?.timesCallAI;

  const handleOpenCamera = () => {
    setModalCamera(true);
    setSlotCamera(slot);
    setType(slot === "REG_STAMP" ? "DK_STAMP" : "ANALYZE");
  };

  return (
    <div className="bg-white p-2 flex flex-col items-center pt-8 rounded-md">
      <div className="w-[163px] h-[96px]">
        <Image
          src={data?.url || imgSrc}
          alt="car"
          style={{ width: "163px", height: "96px" }}
        />
      </div>

      <StatusText text={text} status={data?.status} timesCallAI={timesCallAI} />
      <Button
        disabled={data?.status == "VALID"}
        block
        style={{ border: "1px solid #f8a465" }}
        className="flex items-center justify-center btn-cam text-[#f8a465]"
        onClick={handleOpenCamera}
      >
        <span className="font-bold ">Chụp ảnh</span>
        <span className="ml-2">
          <CameraFilled style={{ color: gold[5] }} />
        </span>
      </Button>
    </div>
  );
}
