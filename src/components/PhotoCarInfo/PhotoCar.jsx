import React from "react";
import { lime, gold } from "@ant-design/colors";
import {
  CheckCircleFilled,
  ExclamationCircleFilled,
  CameraFilled,
} from "@ant-design/icons";
import { Button, Image } from "antd";

function PhotoCar({imgSrc}) {
  function StatusText({ text, status }) {
    return (
      <p className="text-sm my-4 font-bold">
        <span className="pr-1">
          {status ? (
            <CheckCircleFilled style={{ color: lime[5] }} />
          ) : (
            <ExclamationCircleFilled style={{ color: gold[5] }} />
          )}
        </span>
        {text}
      </p>
    );
  }

  return (
    <div className="bg-[#fff] p-2 flex flex-col items-center pt-8 rounded-md">
      <Image src={imgSrc} alt="car" style={{ width: '163px', height: "96px" }}/>
      <StatusText text="Đầu xe và Biển" status={false} />
      <Button block style={{border: "1px solid #f8a465"}}href="/shoot">
        <span className="font-bold text-[#f8a465] ">Chụp ảnh</span>
        <span className="ml-2">
          <CameraFilled style={{ color: gold[5] }} />
        </span>
      </Button>
    </div>
  );
}

export default PhotoCar;
