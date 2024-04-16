import InsuranceInfo from "./InsuranceInfo";
import PhotoGuide from "./PhotoGuide";

const Title = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-base leading-6">Chụp ảnh thẩm định</h2>
      <h1 className="text-[22px] text-[#eb8e47] py-2 ">Bảo hiểm xe cơ giới</h1>
    </div>
  );
};

const InfoAndGuide = ({ dataInsurance }) => {
  return (
    <div className="bg-[#fff] rounded-t-[40px] pt-6 px-4 pb-6">
      <Title />
      <InsuranceInfo dataInsurance={dataInsurance} />
      <PhotoGuide />
    </div>
  );
};

export default InfoAndGuide;
