export default function ModalReject() {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-10 overflow-hidden bg-[#fff]">
      <div className="flex flex-col items-center">
        <img src="/Illustration.svg" alt="error" className="mt-[160px]" />
        <p className="mt-4 text-xl font-semibold  text-[#262628]">Đơn bị hủy</p>
        <p className="mt-4 text-center text-sm font-normal leading-[21px] text-[#64748B] px-12 ">
          Hợp đồng Bảo hiểm Vật chất xe ô tô đã bị huỷ do bạn từ chối xác nhận.
          Vui lòng liên hệ với tư vấn viên để được hỗ trợ.
        </p>
      </div>
    </div>
  );
}
