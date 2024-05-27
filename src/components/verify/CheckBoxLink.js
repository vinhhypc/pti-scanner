import { Checkbox } from "antd";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { listCheckCondition } from "./verify.atom";

function CheckBoxLink({ dataChecked = [] }) {
  const setListCheckCondition = useSetRecoilState(listCheckCondition);
  const [check, setCheck] = useState(() => {
    return Array.from({ length: dataChecked.length }, () => true);
  });

  const handleCheck = (index, checked) => {
    const checkClone = [...check];
    checkClone[index] = checked;
    setListCheckCondition(checkClone.every((item) => item));
    setCheck(checkClone);
  };
  return dataChecked.map((item, index) => {
    return (
      <div
        key={index}
        className="flex items-start gap-2 mt-1 text-neutral-500 text-[13px] font-normal  leading-6 checkbox-custom"
      >
        <Checkbox
          checked={check[index]}
          onChange={(e) => handleCheck(index, e.target.checked)}
        >
          <span className="flex-1 text-[13px] font-normal leading-[24px] text-neutral-500 ">
            {item?.textContent}
          </span>
        </Checkbox>
      </div>
    );
  });
}

export default CheckBoxLink;
