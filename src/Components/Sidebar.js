import React, { useState } from "react";
import { ReactComponent as DashboardIcon } from "../Icons/dashboard.svg";
import { ReactComponent as OrdersIcon } from "../Icons/orders.svg";
import { ReactComponent as CoustomerIcon } from "../Icons/customer.svg";
import { ReactComponent as PackageIcon } from "../Icons/Package.svg";
import { ReactComponent as CouponIcon } from "../Icons/Coupon Discount.svg";
import { ReactComponent as UserIcon } from "../Icons/user.svg";
import { ReactComponent as SettingIcon } from "../Icons/seettings.svg";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [selectedBtn, setSelectedBtn] = useState("dashboard");
  const navigate = useNavigate();
  return (
    <div className="flex h-full w-20 flex-col items-center justify-evenly  p-3">
      <div className="space-y-4">
        <button
          onClick={() => {
            setSelectedBtn("dashboard");
            navigate("");
          }}
          className={` rounded-md  transition ${
            selectedBtn == "dashboard" ? "bg-Layout-Blue" : "bg-Layout-White"
          } p-4`}
        >
          <DashboardIcon
            className={`${
              selectedBtn == "dashboard"
                ? "fill-Layout-White"
                : "fill-Text-DarkGray"
            }`}
          />
        </button>
        <button
          onClick={() => {
            setSelectedBtn("orders");
            navigate("orders");
          }}
          className={` rounded-md  transition ${
            selectedBtn == "orders" ? "bg-Layout-Blue" : "bg-Layout-White"
          } p-4`}
        >
          <OrdersIcon
            className={`${
              selectedBtn == "orders"
                ? "fill-Layout-White"
                : "fill-Text-DarkGray"
            }`}
          />
        </button>
        <button
          onClick={() => {
            setSelectedBtn("customers");
            navigate("customers");
          }}
          className={` rounded-md  transition ${
            selectedBtn == "customers" ? "bg-Layout-Blue" : "bg-Layout-White"
          } p-4`}
        >
          <CoustomerIcon
            className={`${
              selectedBtn == "customers"
                ? "fill-Layout-White"
                : "fill-Text-DarkGray"
            }`}
          />
        </button>
        <button
          onClick={() => {
            setSelectedBtn("packages");
            navigate("packages");
          }}
          className={` rounded-md  transition ${
            selectedBtn == "packages" ? "bg-Layout-Blue" : "bg-Layout-White"
          } p-4`}
        >
          <PackageIcon
            className={`${
              selectedBtn == "packages"
                ? "fill-Layout-White"
                : "fill-Text-DarkGray"
            }`}
          />
        </button>
        <button
          onClick={() => {
            setSelectedBtn("coupons");
            navigate("coupons");
          }}
          className={` rounded-md  transition ${
            selectedBtn == "coupons" ? "bg-Layout-Blue" : "bg-Layout-White"
          } p-4`}
        >
          <CouponIcon
            className={`${
              selectedBtn == "coupons"
                ? "fill-Layout-White"
                : "fill-Text-DarkGray"
            }`}
          />
        </button>
        <button
          onClick={() => {
            setSelectedBtn("user");
            navigate("user");
          }}
          className={` rounded-md transition  ${
            selectedBtn == "user" ? "bg-Layout-Blue" : "bg-Layout-White"
          } p-4`}
        >
          <UserIcon
            className={`${
              selectedBtn == "user" ? "fill-Layout-White" : "fill-Text-DarkGray"
            }`}
          />
        </button>
      </div>

      <div className="self-end">
        <button
          onClick={() => {
            setSelectedBtn("settings");
            navigate("settings");
          }}
          className={`  rounded-md transition ${
            selectedBtn == "settings" ? "bg-Layout-Blue" : "bg-Layout-White"
          }  p-4`}
        >
          <SettingIcon
            className={`${
              selectedBtn == "settings"
                ? "fill-Layout-White"
                : "fill-Text-DarkGray"
            }`}
          />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
