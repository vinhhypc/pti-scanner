import { Button } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useProps } from "./ContextProps";
import ModalSuccess from "./ModalSuccess";
import PopupOtp from "./PopupOtp";
import { openModalConfirm } from "./verify.atom";

export default function ButtonConfirm() {
  const { isDisabled } = useProps();

  const [loading, setLoading] = useState(false);
  const setOpenModalConfirm = useSetRecoilState(openModalConfirm);
  const router = useRouter();
  const { id, token } = router.query;

  const handleConfirm = async () => {
    setOpenModalConfirm(true);
    // try {
    //   setLoading(true);
    //   await customerApi.sendOpt(id, { token });
    //   setOpenModalConfirm(true);
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setLoading(false);
    // }
  };
  return (
    <>
      <Button
        loading={loading}
        onClick={handleConfirm}
        disabled={isDisabled}
        className="w-full  h-[40px] text-sm font-semibold leading-6 text-[#FFFFFF] bg-[#F68632]"
        style={{ border: "none" }}
      >
        Xác nhận
      </Button>
      <PopupOtp />
      <ModalSuccess />
    </>
  );
}

