import ButtonConfirm from "@/component/verify/ButtonConfirm";
import ButtonReject from "@/component/verify/ButtonReject";
import CardPhotographTheCar from "@/component/verify/CardPhotographTheCar";
import CheckBoxLink from "@/component/verify/CheckBoxLink";
import WrapperLayout from "@/src/layout/WrapperLayout";

function Verify(props) {
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
        <CheckBoxLink
          dataChecked={[
            {
              textContent:
                "Tôi hiểu và đồng ý rằng, PTI chỉ chịu trách nhiệm bảo hiểm phù hợp với những điều khoản, điều kiện của Hợp đồng bảo hiểm/Giấy chứng nhận bảo hiểm, Quy tắc bảo hiểm và các sửa đổi bổ sung (nếu có).",
            },
            {
              textContent:
                "Tôi hiểu và đồng ý rằng, trong trường hợp tôi thanh toán phí bảo hiểm sau thời điểm hiệu lực bảo hiểm theo yêu cầu ở trên, hiệu lực bảo hiểm trên giấy chứng nhận bảo hiểm do PTI phát hành sẽ chỉ có hiệu lực kể từ thời điểm tôi thanh toán phí bảo hiểm thành công.",
            },
            {
              textContent:
                "Tôi hiểu và đồng ý rằng, Hợp đồng bảo hiểm/Giấy chứng nhận bảo hiểm sẽ không có hiệu lực khi sự kiện bảo hiểm đã xảy ra trước thời điểm bắt đầu thời hạn bảo hiểm và/hoặc phí bảo hiểm không được đóng đầy đủ và đúng hạn theo thỏa thuận tại Hợp đồng bảo hiểm/Giấy chứng nhận bảo hiểm.",
            },
            {
              textContent: (
                <>
                  Tôi hiểu và đồng ý rằng, việc cung cấp Dữ liệu cá nhân cho PTI
                  chính là sự chấp thuận toàn phần đối với “Chính Sách Bảo Vệ Dữ
                  Liệu Cá Nhân” của PTI đăng tải trên trang điện tử{" "}
                  <a
                    href="https://www.pti.com.vn"
                    className="!text-[#1677ff] "
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.pti.com.vn
                  </a>
                  .
                </>
              ),
            },
            {
              textContent:
                "Tôi cam kết rằng, những kê khai trong Giấy yêu cầu bảo hiểm này là chính xác và trung thực.",
            },
          ]}
        />
      </div>
      <div>
        <ButtonReject />
        <ButtonConfirm />
      </div>
    </WrapperLayout>
  );
}

export default Verify;
