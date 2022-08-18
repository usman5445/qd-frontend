import React from "react";

function InfoCard({ title, num, growth }) {
  return (
    <div className="flex  justify-between rounded-lg bg-Layout-White p-4 font-Mulish-Bold text-base">
      <div className="space-y-2">
        <p>{title}</p>
        <p>{num}</p>
      </div>
      <div
        className={` space-y-2 text-end ${
          growth[0] == "+" ? "text-[#42BDA1]" : "text-[#F04461]"
        }`}
      >
        <p className="text-xl ">{growth[0] == "+" ? "↑" : "↓"}</p>
        <p>{growth}</p>
      </div>
    </div>
  );
}

export default InfoCard;
