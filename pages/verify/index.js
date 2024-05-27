import ButtonConfirm from "@/src/components/verify/ButtonConfirm";
import ButtonReject from "@/src/components/verify/ButtonReject";
import CardPhotographTheCar from "@/src/components/verify/CardPhotographTheCar";
import CheckBoxLink from "@/src/components/verify/CheckBoxLink";
import ContextProps from "@/src/components/verify/ContextProps";
import { dataChecked } from "@/src/components/verify/constant";
import WrapperLayout from "@/src/layout/WrapperLayout";

export default function Verify() {
  return (
    <WrapperLayout
      title="Xác nhận yêu cầu tham gia bảo hiểm"
      className="bg-blue-600"
      typeInsurance="Bảo hiểm xe cơ giới"
    >
      <p className="leading-6 font-normal text-[13px]">
        Sau khi đọc và được PTI giải thích rõ về quyền lợi bảo hiểm, điều khoản
        loại trừ trách nhiệm bảo hiểm, quyền và nghĩa vụ của bên mua bảo hiểm
        khi giao kết hợp đồng bảo hiểm theo{" "}
        <a className="text-blue-600 no-underline" href="/">
          Quy tắc bảo hiểm tự nguyện Xe cơ giới
        </a>{" "}
        và{" "}
        <a className="text-blue-600 no-underline" href="/">
          Nghị định 67/2023/NĐ-CP
        </a>
        , tôi đã hiểu rõ các điều khoản này và đề nghị PTI nhận bảo hiểm xe cơ
        giới theo những nội dung sau:
      </p>
      <p className="leading-6 font-normal text-[13px]">
        Sau khi đọc và được PTI giải thích rõ về quyền lợi bảo hiểm, điều khoản
        loại trừ trách nhiệm bảo hiểm, quyền và nghĩa vụ của bên mua bảo hiểm
        khi giao kết hợp đồng bảo hiểm theo{" "}
        <a className="text-blue-600 no-underline" href="/">
          Quy tắc bảo hiểm tự nguyện Xe cơ giới
        </a>{" "}
        và{" "}
        <a className="text-blue-600 no-underline" href="/">
          Nghị định 67/2023/NĐ-CP
        </a>
        , tôi đã hiểu rõ các điều khoản này và đề nghị PTI nhận bảo hiểm xe cơ
        giới theo những nội dung sau:
      </p>
      <div>
        <iframe src="https://" width="100%" height="200px" />
      </div>
      <div className="py-5">
        <p className="text-sm font-semibold leading-5">Thông tin ảnh xe</p>
        <div className="grid grid-cols-2 gap-4">
          <CardPhotographTheCar />
          <CardPhotographTheCar />
          <CardPhotographTheCar />
          <CardPhotographTheCar />
        </div>
      </div>
      <div className="flex py-5 ">
        <span>Tổng phí bảo hiểm (bao gồm VAT):</span>
        <span className="flex-1 text-nowrap">
          1000000000000000000 <span>VND</span>
        </span>
      </div>
      <div>
        <CheckBoxLink dataChecked={dataChecked} />
      </div>
      <ContextProps className="flex justify-around gap-2 py-2">
        <ButtonReject />
        <ButtonConfirm />
      </ContextProps>
    </WrapperLayout>
  );
}
