"use client";
import uploadApi from "@/api/uploadApi";
import { Button, message } from "antd";
import dynamic from "next/dynamic";
import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { CameraFilled } from "@ant-design/icons";
import { gray } from "@ant-design/colors";

const FACING_MODE_USER = "user";
const videoConstraints = {
  facingMode: FACING_MODE_USER,
};

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const handleSend = async () => {
    useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    if (!imgSrc) {
      message.error("Vui lòng chụp ảnh trước");
      return;
    }
    try {
      await uploadApi.uploadImg(imgSrc);
      message.success("Upload thành công");
    } catch (e) {
      message.error("Upload thất bại");
    }
  };

  return (
    <div className="h-screen bg-[#f5f8ff]">
      {!imgSrc && (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          screenshotQuality={1}
          videoConstraints={{
            ...videoConstraints,
          }}
          style={{
            width: "90%",
            height: "80%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "30px",
            marginTop: "20px",
            marginLeft: "20px",
          }}
          className="webcam"
        />
      )}

      <div className="flex justify-center mt-2">
        <Button
          onClick={handleSend}
          shape="circle"
          ghost
          icon={<CameraFilled />}
          style={{ color: gray[5],background:"#fff" }}
          size="large"
        />
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(WebcamCapture), { ssr: false });
