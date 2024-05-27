import { useRecoilValue } from 'recoil';

import { openModalSuccessAtom } from './confirm.atom';

export default function ModalSuccess() {
  const openSuccess = useRecoilValue(openModalSuccessAtom);

  if (!openSuccess) return null;
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-10 overflow-hidden bg-white">
      <div className="flex flex-col items-center">
        <img src="/support.svg" alt="error" className="mt-[160px]" />
        <p className="mt-4 text-xl font-medium text-neutral-500">
          Xác nhận đơn thành công
        </p>
        <p className="mt-4 text-sm font-normal leading-[21px] text-second">
          Vui lòng liên hệ với tư vấn viên để thanh toán
        </p>
      </div>
    </div>
  );
}

