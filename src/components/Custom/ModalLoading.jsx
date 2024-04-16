import { Spin } from "antd";
import React from "react";

function ModalLoading({ loading }) {
  return (
    <Spin spinning={loading}>
      <div className="text-center">
        <h3>AI phân tích ảnh</h3>
        <p>Hệ thống đang xử lý dữ liệu, xin đợi trong giây lát</p>
      </div>
    </Spin>
  );
}

export default ModalLoading;
