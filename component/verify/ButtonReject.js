import { Button } from 'antd';
import { useRouter } from 'next/router';
import ModalReject from './ModalReject';
import { memo, useState } from 'react';


function ButtonReject({ isDisabled }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;
//   const { token } = useGetParamsUrl();

  const [openModalReject, setOpenModalReject] = useState(false);
  const handleReject = async () => {
    // try {
    //   setLoading(true);
    //   await customerApi.rejectInsurance(id, { token });
    //   setOpenModalReject(true);
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setLoading(false);
    // }
  };
  return (
    <>
      <Button
        disabled={isDisabled}
        loading={loading}
        onClick={handleReject}
        type="text"
        className="h-[41px] w-full text-sm font-normal leading-6 text-blue-600"
        style={{ border: 'none' }}>
        Từ chối
      </Button>
      {openModalReject && <ModalReject />}
    </>
  );
}

export default memo(ButtonReject);
