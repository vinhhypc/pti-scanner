import Head from "next/head";
import { Children } from "react";

export default function Layout({ children, typeInsurance , title}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div
        className="flex flex-col items-center "
        style={{ lineBreak: "anywhere" }}
      >
        <div className="max-w-[450px] h-full bg-[#F9F9F9]  w-full flex-1">
          <div className="bg-[#00377B] pb-[40px]">
            <div className="flex justify-center py-6 ">
              <img src="/logo.svg" alt="logo" />
            </div>
          </div>
          <div className=" -mt-[40px] rounded-t-[40px] bg-[#fff] ">
            <div className="pt-[32px] pb-[16px]">
              <p className="text-neutral-500 text-[15px] font-semibold leading-6 text-center">
                Xác nhận yêu cầu tham gia bảo hiểm
              </p>
              <p className="text-xl font-semibold leading-8 text-center text-secondary">
                {typeInsurance}
              </p>
            </div>
          </div>
          {Children.map(children, (child) => {
            return (
              <div className="mb-2 last:mb-0 bg-[#FFFFFF] px-4">{child}</div>
            );
          })}
        </div>
      </div>
    </>
  );
}
