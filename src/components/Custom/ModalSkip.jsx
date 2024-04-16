import { Button, Modal } from "antd";
import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { openModalCamera, openModalView, slotCamera } from "../confirm/confirm.atom";
import uploadApi from "@/api/uploadApi";

const TitleModal = () => {
  return (
    <p className="text-center">
      <img src="/warning.svg" alt="warning" />
    </p>
  );
};

function ModalSkip({ setStatus,status, id, mutate }) {
  const setModalView = useSetRecoilState(openModalView);
  const setModalCamera = useSetRecoilState(openModalCamera);
  const slot = useRecoilValue(slotCamera);

  const handleConfirm = async () => {
    try {
      await uploadApi.confirmPass(id, slot);
      setModalCamera(false)
      setModalView(true);
      setStatus()
      mutate()
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Modal
      title={<TitleModal />}
      centered
      width={300}
      className="text-center"
      footer={null}
      closeIcon={false}
      open={status === 'skip'}
    >
      <div className="text-center">
        <h3>Duyệt ảnh sau</h3>
        <p className="my-2">
          Bạn có muốn lưu lại ảnh này và tiếp tục chuyển sang chụp góc khác
          không?
        </p>
        <div className="flex justify-center ">
          <Button
            className="mt-2 w-[240px] bg-primary"
            size="large"
            style={{ border: "1px solid #f68632" }}
            onClick={handleConfirm}
            type="primary"
          >
            <p className="text-white"> Lưu ảnh</p>
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalSkip;
