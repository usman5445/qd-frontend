import React from "react";
import Tabs from "../Components/Tabs";
import { ReactComponent as SearchIcon } from "../Icons/SEARCH.svg";
function Dashboard() {
  return (
    <div className="h-full   w-full space-y-4 rounded-xl bg-Layout-White p-4">
      <div className="flex w-full space-x-2 rounded-md bg-Layout-LightGray py-2 px-4">
        <SearchIcon className="fill-Text-DarkGray" />
        <input
          type="text"
          placeholder="Search here..."
          className="w-full bg-Transparent text-base focus:outline-none"
        />
      </div>
      <Tabs tabs={["All", "Food", "Drinks", "Snacks", "Packages"]} />
    </div>
  );
}

export default Dashboard;
