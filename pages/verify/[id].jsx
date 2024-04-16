import Image from "next/image";
import logo from "../../public/logo.svg";
import InfoAndGuide from "@/src/components/Intro/InfoAndGuide";
import { Button, message } from "antd";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  openModalThankYou,
  openModalView,
} from "@/src/components/confirm/confirm.atom";
import ModalView from "@/src/components/confirm/ModalView";
import infoApi from "@/api/infoApi";
import Loading from "@/src/components/Custom/Loading";
import { useRouter } from "next/router";
import useGetParamsUrl from "@/src/components/utils/useGetParamsUrl";
import uploadApi from "@/api/uploadApi";
import ModalThankYou from "@/src/components/confirm/ModalThankYou";

function Logo() {
  return (
    <div className="flex justify-center py-6">
      <Image src={logo} alt="logo" />
    </div>
  );
}

export default function Page() {
  const setOpenModalView = useSetRecoilState(openModalView);
  const router = useRouter();
  const { id } = router.query;
  const { token } = useGetParamsUrl();
  const setOpenThankyou = useSetRecoilState(openModalThankYou);
  const isViewModal = useRecoilValue(openModalView)

  const {
    data: dataInsurance,
    isLoading,
    error,
  } = infoApi.getInfoOrder(id, token);

  const { data: dataListImage, mutate } = uploadApi.getListUpload(id, token);

  if (
    !isViewModal && dataListImage &&
    dataListImage.length === 6 &&
    dataListImage.every((item) => item.status === "VALID")
  ) {
    setOpenThankyou(true);
    return <ModalThankYou />;
  }

  const handleModal = () => {
    setOpenModalView(true);
  };

  if (isLoading || !dataInsurance) return <Loading />;
  if (error) {
    message.error(error?.response?.data?.message);
    return <Loading />;
  }

  return (
    <div
      className="flex flex-col items-center z-1 "
      style={{ lineBreak: "anywhere" }}
    >
      <div className="width-layout h-full bg-logo w-full flex-1">
        <Logo />
        <InfoAndGuide dataInsurance={dataInsurance} />
        <div className=" flex justify-center pt-4 pb-6 box-shadow-line width-layout bg-white z-10 ">
          <Button
            className=" no-underline text-white w-[300px] mx-6 font-light flex justify-center gap-1 items-center"
            size="large"
            block
            type="primary"
            onClick={handleModal}
          >
            Bắt đầu chụp ảnh
            <Image src="/camera.png" width={20} height={20} alt="camera" />
          </Button>
        </div>
      </div>
      <ModalView
        id={id}
        token={token}
        dataListImage={dataListImage}
        mutate={mutate}
      />
    </div>
  );
}
