import { useRecoilValue } from "recoil";
import { openModalViewSuccess } from "./verify.atom";

export default function ModalSuccess() {
  const openSuccess = useRecoilValue(openModalViewSuccess);
  if (!openSuccess) return null;
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-10 overflow-hidden bg-[#fff]">
      <div className="flex flex-col items-center">
        <img src="/support.svg" alt="error" className="mt-[160px]" />
        <p className="mt-4 text-xl font-semibold  text-[#262628]">
          Xác nhận đơn thành công
        </p>
        <p className="mt-4 text-center text-sm font-normal leading-[21px] text-[#64748B] px-12 ">
          Bạn đã xác nhận thành công yêu cầu tham gia Bảo hiểm Vật chất xe ô tô.
          Vui lòng liên hệ với tư vấn viên để hoàn thành thủ tục thanh toán.
        </p>
      </div>
    </div>
  );
}
