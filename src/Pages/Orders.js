import React from "react";
import InfoCard from "../Components/InfoCard";

function Orders() {
  return (
    <div className="h-full w-full  space-y-4 overflow-y-scroll rounded-xl  p-4">
      <div className="grid  w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <InfoCard title={"Coustomer"} num={"1000"} growth={"-15%"} />
        <InfoCard title={"Orders"} num={"1050"} growth={"+20%"} />
        <InfoCard title={"Revenue"} num={"$50.000"} growth={"+10%"} />
        <InfoCard title={"Net Profit"} num={"$12.000"} growth={"+12%"} />
      </div>
      <div className="grid  w-full gap-8  md:grid-cols-3 ">
        <div className="relative col-span-3 space-y-1 rounded-lg bg-Layout-White p-4 text-base lg:col-span-2">
          <h1 className="w-min font-Mulish-Bold text-lg">Latest Order</h1>
          <table className="h-[90%] w-full table-auto overflow-y-scroll">
            <thead className="overflow-hidden  ">
              <th className="rounded-lg bg-Layout-LightGray p-4 text-center">
                NO.
              </th>
              <th className="bg-Layout-LightGray  p-4 text-center">Item</th>
              <th className="bg-Layout-LightGray  p-4 text-center">Quality</th>
              <th className="bg-Layout-LightGray  p-4 text-center">Revenue</th>
              <th className="rounded-lg bg-Layout-LightGray p-4 text-center">
                Net Profit
              </th>
            </thead>
            <tbody className="  text-center">
              <tr className="  border-b border-Layout-LightGray">
                <td className="py-2">01</td>
                <td className="py-2">Sashimi</td>
                <td className="py-2">30</td>
                <td className="py-2">$293.01</td>
                <td className="py-2">$710.68</td>
              </tr>
              <tr className="  border-b border-Layout-LightGray">
                <td className="py-2">02</td>
                <td className="py-2">Unagi - Grilled Eel</td>
                <td className="py-2">30</td>
                <td className="py-2">$739.65</td>
                <td className="py-2">$779.58</td>
              </tr>
              <tr className="  border-b border-Layout-LightGray">
                <td className="py-2">03</td>
                <td className="py-2">Soba - Buckwheat Noodles</td>
                <td className="py-2">30</td>
                <td className="py-2">$779.58</td>
                <td className="py-2">$105.55</td>
              </tr>
              <tr className="  border-b border-Layout-LightGray">
                <td className="py-2">04</td>
                <td className="py-2">Onigiri - Rice Balls</td>
                <td className="py-2">30</td>
                <td className="py-2">$589.99</td>
                <td className="py-2">$475.22</td>
              </tr>
              <tr className="  border-b border-Layout-LightGray">
                <td className="py-2">05</td>
                <td className="py-2">Sashimi</td>
                <td className="py-2">30</td>
                <td className="py-2">$406.27</td>
                <td className="py-2">$767.50</td>
              </tr>
              <tr className="  border-b border-Layout-LightGray">
                <td className="py-2">06</td>
                <td className="py-2">Yakitori - Grilled Chicken</td>
                <td className="py-2">30</td>
                <td className="py-2">$396.84</td>
                <td className="py-2">$948.55</td>
              </tr>
              <tr className="  border-b border-Layout-LightGray">
                <td className="py-2">07</td>
                <td className="py-2">Royal Milk Tea</td>
                <td className="py-2">30</td>
                <td className="py-2">$767.50</td>
                <td className="py-2">$106.58</td>
              </tr>
              <tr className="  border-b border-Layout-LightGray">
                <td className="py-2">08</td>
                <td className="py-2">Flavored Soymilk Drinks</td>
                <td className="py-2">30</td>
                <td className="py-2">$778.35</td>
                <td className="py-2">$778.35</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="relative col-span-3 rounded-lg bg-Layout-White p-4 text-base lg:col-span-1">
          <div className="flex items-center justify-between border-b border-Layout-LightGray py-2">
            <h1 className=" font-Mulish-Bold text-lg">Item Sold</h1>
            <select
              className="rounded-lg bg-Transparent py-2 px-4 text-Layout-Blue outline outline-Layout-Blue"
              name=""
              id=""
            >
              <option value="Best Sellers">Best Sellers</option>
            </select>
          </div>
          <div className="h-[90%] w-full space-y-3  p-2 ">
            <div className="grid grid-cols-4 items-center">
              <div className="h-14 w-14  rounded-lg bg-Layout-Gray"></div>
              <h1 className="col-span-2 text-start">Sashimi</h1>
              <p className="text-end">430 Items</p>
            </div>
            <div className="grid grid-cols-4 items-center">
              <div className="h-14 w-14  rounded-lg bg-Layout-Gray"></div>
              <h1 className="col-span-2 text-start">Unagi - Grilled Eel</h1>
              <p className="text-end">200 Items</p>
            </div>
            <div className="grid grid-cols-4 items-center">
              <div className="h-14 w-14  rounded-lg bg-Layout-Gray"></div>
              <h1 className="col-span-2 text-start">
                Soba - Buckwheat Noodles
              </h1>
              <p className="text-end">180 Items</p>
            </div>
            <div className="grid grid-cols-4 items-center">
              <div className="h-14 w-14  rounded-lg bg-Layout-Gray"></div>
              <h1 className="col-span-2 text-start">Onigiri - Rice Balls</h1>
              <p className="text-end">120 Items</p>
            </div>
            <div className="grid grid-cols-4 items-center">
              <div className="h-14 w-14  rounded-lg bg-Layout-Gray"></div>
              <h1 className="col-span-2 text-start">
                Yakitori - Grilled Chicken
              </h1>
              <p className="text-end">80 Items</p>
            </div>
            <div className="grid grid-cols-4 items-center">
              <div className="h-14 w-14  rounded-lg bg-Layout-Gray"></div>
              <h1 className="col-span-2 text-start">Royal Milk Tea</h1>
              <p className="text-end">70 Items</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
