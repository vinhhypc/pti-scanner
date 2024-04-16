
function ItemInfo({ title, info }) {
  return (
    <div className="flex justify-between text-xs">
      <p className="text-[#64748B] whitespace-nowrap">{title}:</p>
      <p className="text-end pl-4" >{info}</p>
    </div>
  );
}

function InsuranceInfo() {
  return (
    <div className="flex flex-col pt-4" >
      <h4>Thông tin đơn bảo hiểm</h4>
      <div className="bg-gray-100 my-4 flex flex-col gap-2 p-2 rounded-md" >
        <ItemInfo title='Số hợp đồng' info='000OTTN+230002014+230002014'/>
        <ItemInfo title='Tên chủ xe' info='Đào Mai Chi'/>
        <ItemInfo title='Biển số xe' info='30A-1234567'/>
        <ItemInfo title='Số khung' info='12234567789A79'/>
        <ItemInfo title='Hãng xe' info='HONDA'/>
        <ItemInfo title='Hiệu xe' info='CR V-E'/>
        <ItemInfo title='Năm sản xuất' info='2024'/>
      </div>
    </div>
  );
}

export default InsuranceInfo;
