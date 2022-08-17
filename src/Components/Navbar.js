import React from "react";
import BellIcon from "../Icons/Notification Bell.svg";
function Navbar() {
  return (
    <div className="flex h-16 w-full items-center justify-between p-4 shadow">
      <div className="flex space-x-2">
        <div className="h-10 w-10 rounded-md bg-Layout-Gray"></div>
        <h1 className="font-Mulish-Bold">Dazzie</h1>
      </div>
      <div className="flex space-x-4">
        <img className="hidden md:block" src={BellIcon} alt="Notifications" />
        <div className="h-10 w-10 rounded-full bg-Layout-Gray"></div>
        <div>
          <p className="text-base font-bold">Sumanto</p>
          <p className="text-sm">Cashier</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
