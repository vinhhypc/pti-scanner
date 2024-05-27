import { LeftOutlined } from "@ant-design/icons";
import { Button, Input, Spin } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { openModalConfirm, openModalViewSuccess } from "./verify.atom";
import { useProps } from "./ContextProps";

function Content() {
  const { phoneNumber } = useProps();
  const router = useRouter();

  const setOpenModalConfirm = useSetRecoilState(openModalConfirm);
  const setOpenModalViewSuccess = useSetRecoilState(openModalViewSuccess);

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleOtp = async (value) => {
    setOtp(value);
    if (value.length === 6) {
      try {
        setLoading(true);
        // const params = {
        //   otp: value,
        //   token,
        // };
        // await customerApi.confirmInsurance(id, params);
        setOpenModalViewSuccess(true);
        setOpenModalConfirm(false);
        setIsError(false);
      } catch (error) {
        setIsError(true);
        setOtp("");
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-10 overflow-hidden bg-[#fff]">
      <Spin spinning={loading}>
        <div className="">
          <div className="pt-4">
            <Button
              type="link"
              icon={<LeftOutlined />}
              onClick={() => setOpenModalConfirm(false)}
            />
          </div>
          <div className="flex flex-col items-center ">
            <img src="/logo-pti-confirm.svg" alt="logo" />
            <div className="flex flex-col items-center">
              <p className="mt-6 text-2xl font-semibold leading-[32px] text-ink-500">
                Nhập mã xác nhận
              </p>
              <p className="text-sm font-normal leading-[20px]">
                Nhập mã xác nhận được gửi đến số điện thoại
              </p>
              <p className="text-sm font-normal text-ink-500">{phoneNumber}</p>
            </div>
            <div className="mt-6">
              <Input.OTP
                status={isError ? "error" : null}
                onChange={handleOtp}
                value={otp}
                formatter={(str) => str.toUpperCase()}
              />
            </div>
            {isError && (
              <div className="flex gap-1 mt-1">
                <img src="/danger.svg" alt="error" />
                <span className="text-xs font-normal leading-[16px] text-red-500">
                  Mã OTP không đúng hoặc đã hết hạn
                </span>
              </div>
            )}
            {/* <ResendOtp /> */}
          </div>
        </div>
      </Spin>
    </div>
  );
}
export default function PopupOtp() {
  const open = useRecoilValue(openModalConfirm);
  if (!open) return null;
  return <Content />;
}
