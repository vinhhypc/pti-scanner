
import { useRecoilValue } from "recoil";
import { openModalThankYou } from "./confirm.atom";

export default function ModalThankYou() {
  const openModal = useRecoilValue(openModalThankYou);
  if (!openModal) return null;
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-100 overflow-auto bg-white">
      <div className="flex flex-col items-center z-11">
        <div className="flex flex-col items-center py-24 px-5 text-sm text-center leading-6 text-[#64748B] width-layout">
          <img src="/thank.svg" alt="thank" />
          <h2 className="mt-8">
            Cảm ơn bạn
          </h2>
          <p>Cảm ơn bạn. PTI đã lưu ảnh thành công,</p>
          <p>bạn vui lòng chờ trong ít phút để PTI phê</p>
          <p>duyệt hợp đồng. Bạn vui lòng liên hệ</p>
          <p>
            <a
              href="tel:19002983"
              className="text-blue-500 underline"
              target="_blank"
              rel="noreferrer"
            >
              19002983
            </a>{" "}
            để được trợ giúp
          </p>
        </div>
      </div>
    </div>
  );
}
