import { Button } from 'antd';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import PopupOtp from './PopupOtp';
import { openModalConfirm } from './verify.atom';

function ButtonConfirm({ isDisabled, phoneNumber }) {
  const [loading, setLoading] = useState(false);
  const setOpenModalConfirm = useSetRecoilState(openModalConfirm);
  const router = useRouter();
  const { id } = router.query;
//   const { token } = useGetParamsUrl();

  const handleConfirm = async () => {
    // try {
    //   setLoading(true);
    //   await customerApi.sendOpt(id, { token });
    //   setOpenModalConfirm(true);
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setLoading(false);
    // }
  };
  return (
    <div className='fixed'>
      <Button
        loading={loading}
        onClick={handleConfirm}
        disabled={isDisabled}
        className="w-full text-sm font-semibold leading-6 text-white bg-secondary h-[41px] "
        style={{ border: 'none' }}>
        Xác nhận
      </Button>
      <PopupOtp phoneNumber={phoneNumber} />
    </div>
  );
}

export default ButtonConfirm
