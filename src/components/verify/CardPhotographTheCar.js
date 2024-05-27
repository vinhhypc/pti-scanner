import React from "react";

export default function CardPhotographTheCar({
  label = "Góc trước và Biển",
  isSuccess,
}) {
  return (
    <div>
      <img
        className="w-full"
        style={{ borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}
        alt=""
        src="https://s3-alpha-sig.figma.com/img/e4cb/ad54/a24ebeac96bb6b15726b43f6b96051a5?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hEJ-2VdXu4nhxHOt0WIO6P9lfPvnML2HavjgHdqVcTGurztfP2jA-oufbRExUBg5JIqxhFHLrptotqwu~pnwAmR2f1KFw69t8Y0sf1elZ-1qZmmcMLyrcM5S7eLRlegN5Ej795o5u2rgL3oqatjHxeArKD1aokdYeVuQJBsRGF8e7zXZbObBGbI3Z-O~xhicS4EzC39mMD2m0z7gwFb-V0C6-bSE3JtdNP7oiU~egtyYxGtvJMfC5k9oTA8wRRUTo4RoNfJYPuCm9L3Sc16bDW8tYvVfAcAFowOUwshGu1XGA5aoO3sukvsAOGSvQYSMtV5ND3w5jVjFBxma7I2XUA__"
      />
      <div className="flex items-center justify-center gap-1 py-3">
        {isSuccess ? (
          <img src="/success.svg" alt="success" />
        ) : (
          <img src="/info-circle.svg" alt="warning" />
        )}
        <p className="text-sm font-bold leading-6">{label}</p>
      </div>
    </div>
  );
}
