import { Button } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useProps } from "./ContextProps";
import ModalReject from "./ModalReject";

export default function ButtonReject() {
  const { isDisabled } = useProps();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id, token } = router.query;

  const [openModalReject, setOpenModalReject] = useState(false);
  const handleReject = async () => {
    setOpenModalReject(true);
    // try {
    //   setLoading(true);
    //   await customerApi.rejectInsurance(id, { token });
    //   setOpenModalReject(true);
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setLoading(false);
    // }
  };
  return (
    <>
      <Button
        disabled={isDisabled}
        loading={loading}
        onClick={handleReject}
        type="text"
        className="w-full gap-2  h-[40px] text-sm font-normal leading-6 text-[#1971FF]"
        style={{ border: "none" }}
      >
        Từ chối
      </Button>
      {openModalReject && <ModalReject />}
    </>
  );
}
