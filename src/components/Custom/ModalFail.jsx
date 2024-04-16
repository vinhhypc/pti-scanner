import { Button, Modal } from "antd";

const TitleModal = () => {
  return (
    <p className="text-center">
      <img src="/warning.svg" alt="warning" />
    </p>
  );
};

function ModalFail({ status, setStatus }) {
  return (
    <Modal
      title={<TitleModal />}
      centered
      width={300}
      className="text-center"
      footer={null}
      closeIcon={false}
      open={status === "fail"}
    >
      <div className="text-center">
        <h3>Ảnh chưa hợp lệ</h3>
        <p>
          Vui lòng đảm bảo ảnh chụp chứa biển số xe, toàn bộ xe nằm trong khung
          hình màu cam và không chụp từ khoảng cách quá xa.
        </p>
        <p>Mã lỗi: INS-304</p>
        <Button
          className="mt-2 text-primary"
          block
          size="large"
          style={{ border: "1px solid #f8a465" }}
          onClick={() => setStatus()}
        >
          Chụp lại
        </Button>
      </div>
    </Modal>
  );
}

export default ModalFail;
