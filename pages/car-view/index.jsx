import PhotoCar from "@/src/components/PhotoCarInfo/PhotoCar";
import React from "react";

function CarView() {
  return (
    <div className="max-w-[450px] my-0 mx-auto">
      <div className="bg-[#f9f9f9] p-4">
        <p className="text-sm pt-6 pb-4">
          Chụp ảnh 6 góc xe theo các vị trí minh họa:
        </p>
        <div className="grid grid-cols-2 gap-3">
          <PhotoCar imgSrc="/head.png" />
          <PhotoCar imgSrc="/stamp.png" />
          <PhotoCar imgSrc="/right.png" />
          <PhotoCar imgSrc="/tail.png" />
          <PhotoCar imgSrc="/headleft.png" />
          <PhotoCar imgSrc="/tailleft.png" />
        </div>
      </div>
    </div>
  );
}

export default CarView;
