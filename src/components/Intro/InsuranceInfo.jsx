function ItemInfo({ title, info }) {
  return (
    <div
      className="flex justify-between text-xs"
      style={{ wordWrap: "break-word", wordBreak: "break-word" }}
    >
      <p className="text-[#64748B] whitespace-nowrap">{title}:</p>
      <p className="text-end pl-12">{info}</p>
    </div>
  );
}

function InsuranceInfo({ dataInsurance }) {
  const { vehicleInsurance, ownerInfo } = dataInsurance;

  let userName;
  switch (ownerInfo.customerType) {
    case "KH.PDN":
      userName = ownerInfo.nonCompany.fullName;
      break;
    case "KH.DN":
      userName = ownerInfo.company.fullName;
      break;
    case "KH.CN":
      userName = ownerInfo.individual.fullName;
  }

  return (
    <div className="flex flex-col pt-4 ">
      <h4>Thông tin đơn bảo hiểm</h4>
      <div className="info-user my-4 flex flex-col gap-2 p-2 rounded-md">
        <ItemInfo title="Id hợp đồng" info={dataInsurance?.id} />
        <ItemInfo title="Tên chủ xe" info={userName} />
        <ItemInfo title="Biển số xe" info={vehicleInsurance?.licensePlate} />
        <ItemInfo title="Số khung" info={vehicleInsurance?.frameNumber} />
        <ItemInfo title="Hãng xe" info={vehicleInsurance?.vehicleBrand} />
        <ItemInfo title="Hiệu xe" info={vehicleInsurance?.vehicleSubBrand} />
        <ItemInfo title="Năm sản xuất" info={vehicleInsurance?.released} />
      </div>
    </div>
  );
}

export default InsuranceInfo;
