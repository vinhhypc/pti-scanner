import Image from "next/image";
import rotate from "@/src/images/rotate.svg";
import car from "@/src/images/car.svg";
import clear from "@/src/images/clear.svg";
import light from "@/src/images/light.svg";
import space from "@/src/images/space.svg";
import zoomcar from "@/src/images/zoomcar.svg";

function GuideItem({ logo, guide }) {
  return (
    <div className="flex gap-3 text-xs items-center">
      <Image src={logo} alt="logo" />
      <p>{guide}</p>
    </div>
  );
}

const PhotoGuide = () => {
  return (
    <div>
      <h4 className="mb-4">Hướng dẫn chụp ảnh</h4>
      <div className="grid gap-2 grid-rows-3 grid-cols-2">
        <GuideItem 
          logo={rotate} 
          guide="Giữ camera chụp ảnh theo chiều ngang" 
        />
        <GuideItem 
          logo={car} 
          guide="Hình ảnh rõ nét, không bị mờ, rung lắc" />
        <GuideItem
          logo={space}
          guide="Đứng cách xe 1-2m, đưa vị trí xe vào đúng góc cần chụp"
        />
        <GuideItem
          logo={zoomcar}
          guide="Căn góc chụp toàn bộ xe trong khung hình và rõ biển số xe"
        />
        <GuideItem 
          logo={light} 
          guide="Không gian đầy đủ ánh sáng"
         />
        <GuideItem 
          logo={clear} 
          guide="Xe sạch sẽ, tránh các vết bẩn" />
      </div>
    </div>
  );
};

export default PhotoGuide;
