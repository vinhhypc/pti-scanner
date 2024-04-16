"use client";
import uploadApi from "@/api/uploadApi";
import { Button, message } from "antd";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import ModalLoading from "@/src/components/Custom/ModalLoading";
import CameraIcon from "@/src/components/Custom/IconCameraCustom";
import ModalFail from "@/src/components/Custom/ModalFail";
import ModalSkip from "@/src/components/Custom/ModalSkip";
import Image from "next/image";
import QueryCameraId from "@/src/components/Custom/QueryCameraId";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  openModalCamera,
  openModalView,
  slotCamera,
  typePhoto,
} from "./confirm.atom";
import { base64ToBlob } from "../Custom/base64ToBlob";

const videoConstraints = {
  facingMode: "environment",
  width: 1920,
  height: 1080,
};

const ModalCamera = ({ id, token, mutate }) => {
  const webcamRef = useRef(null);
  const [status, setStatus] = useState();
  const [orientation, setOrientation] = useState("portrait");
  const slot = useRecoilValue(slotCamera);
  const type = useRecoilValue(typePhoto);
  const setModalView = useSetRecoilState(openModalView);
  const setModalCamera = useSetRecoilState(openModalCamera);
  const imageLayer = QueryCameraId();

  const handleOrientation = (event) => {
    const { gamma } = event;

    if (Math.abs(gamma) > 45) {
      setOrientation("landscape");
    } else {
      setOrientation("portrait");
    }
  };

  useEffect(() => {
    window.addEventListener("deviceorientation", handleOrientation);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  const handleSend = async () => {
    const imageSrc = webcamRef.current.getScreenshot();

    if (!imageSrc) {
      message.error("Vui lòng chụp ảnh trước");
      return;
    }
    try {
      setStatus("loading");
      const blob = base64ToBlob(imageSrc, "image/png");
      const formData = new FormData();
      formData.append("file", blob, "image.png");
      await uploadApi.uploadImg(id, token, slot, type, formData);
      message.success("Upload thành công");
      setModalView(true);
      setModalCamera(false);
      mutate();
      setStatus();
    } catch (e) {
      if (e?.response?.data?.error) {
        if (e?.response?.data?.error === "INS-065") {
          setStatus("skip");
        } else {
          setStatus("fail");
        }
      } else {
        message.error("Có lỗi xảy ra khi tải lên");
      }
    }
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-10 overflow-hidden bg-white">
      <div className="h-screen bg-color-camera w-screen">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          screenshotQuality={1}
          videoConstraints={{
            ...videoConstraints,
          }}
          style={styleWebcam}
          className="webcam"
        />
        {imageLayer && (
          <Image
            src={imageLayer}
            className={`absolute top-1/2 left-1/2 ${
              orientation === "landscape" ? "image-rotate" : "image-not-rotate"
            }`}
            width={300}
            height={300}
            alt="image"
          />
        )}
        <div
          className={`camera-button ${
            orientation === "landscape" && "rotate-camera-button"
          }`}
        >
          <Button
            onClick={handleSend}
            style={{ background: "#fff" }}
            shape="circle"
            ghost
            icon={<CameraIcon />}
            size="large"
          />
        </div>
        <ModalFail status={status} setStatus={setStatus} />
        <ModalLoading status={status} />
        <ModalSkip
          status={status}
          setStatus={setStatus}
          id={id}
          mutate={mutate}
        />
      </div>
    </div>
  );
};

const styleWebcam = {
  width: "100vw",
  height: "100vh",
  objectFit: "cover",
  objectPosition: "center",
  borderRadius: "10px",
  marginTop: "20px",
  position: "relative",
};

export default dynamic(() => Promise.resolve(ModalCamera), { ssr: false });
