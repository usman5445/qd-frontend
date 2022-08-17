import React from "react";

function Card({ Title, price }) {
  return (
    <div className="relative h-fit rounded-lg border border-Layout-Gray p-2 ">
      <div className="h-32 w-full rounded-md bg-Layout-Gray md:h-40 lg:h-48 "></div>
      <p className="font-Mulish-Bold text-base">{Title}</p>
      <p className="font-Mulish-Bold text-base text-Text-Cyan">${price}</p>
    </div>
  );
}

export default Card;
