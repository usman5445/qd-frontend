import React, { useState } from "react";
import Card from "./Card";

function Tabs({ tabs }) {
  const [selectedTab, setSelectedTab] = useState("All");
  return (
    <div className="relative h-[90%] w-full ">
      <div className="flex  overflow-x-scroll ">
        {tabs.map((el) => {
          return (
            <button
              onClick={() => {
                setSelectedTab(el);
              }}
              className={`border-b-4 px-2 py-2  text-center font-Mulish-Bold text-xl md:flex-1 ${
                selectedTab == el
                  ? "border-Layout-Blue text-Layout-Blue"
                  : "border-Layout-Gray text-Text-DarkGray"
              }`}
            >
              {el}
            </button>
          );
        })}
      </div>
      <div className="relative h-[95%] w-full overflow-y-scroll  md:p-4">
        <h1 className="font-Mulish-Bold text-2xl">Food</h1>
        <div className="relative grid h-full grid-cols-1  gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card Title="Sashimi" price={22} />
          <Card Title="Sashimi" price={22} />
          <Card Title="Sashimi" price={22} />
          <Card Title="Sashimi" price={22} />
          <Card Title="Sashimi" price={22} />
          <Card Title="Sashimi" price={22} />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
