import { Modal } from "antd";
import React from "react";

const TitleModal = () => {
  return (
    <p className="text-center">
      <img src="/refresh.svg" alt="loading" />
    </p>
  );
};

export default function ModalLoading({status}) {
  return (
    <Modal
      title={<TitleModal />}
      centered
      width={300}
      className="text-center"
      footer={null}
      closeIcon={false}
      open={status === 'loading'}
    >
      <div className="text-center">
        <h3>AI phân tích ảnh</h3>
        <p className="my-2">
          Hệ thống đang xử lý dữ liệu, xin đợi trong giây lát
        </p>
      </div>
    </Modal>
  );
}
