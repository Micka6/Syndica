import React from "react";
import Category from "./Category";
import "../../../css/admin/routing/routing.css";

const data = [
  {
    title: "Utility Expenses",
    items: [
      { icon: "path/to/electricity-icon.png", label: "Electricity" },
      { icon: "path/to/water-icon.png", label: "Water" },
      { icon: "path/to/telephone-icon.png", label: "Telephone" },
      { icon: "path/to/internet-icon.png", label: "Internet" },
    ],
  },
  {
    title: "Personnel Services",
    items: [
      { icon: "path/to/rca-icon.png", label: "RCA" },
      { icon: "path/to/tev-tran-icon.png", label: "TEV - Transportation" },
      { icon: "path/to/tev-inspect-icon.png", label: "TEV - Inspection" },
    ],
  },
  {
    title: "Seminars And Training",
    items: [
      { icon: "path/to/ca-seminar-icon.png", label: "CA - Seminar" },
      { icon: "path/to/re-seminar-icon.png", label: "Re - Seminar" },
    ],
  },
  {
    title: "Testing And Maintenance",
    items: [
      { icon: "path/to/ca-seminar-icon.png", label: "CA - Testing" },
      { icon: "path/to/re-seminar-icon.png", label: "Re - Maintenance" },
    ],
  },
  
];

const Routing = () => {
  return (
    <div className="adminpage__routing-container w-full h-full flex flex-col rounded-xl">
      <div className="adminpage__routing-top w-full h-15 p-4 flex justify-between items-center">
        <h3>Voucher List</h3>
        <div className="w-[10.938rem] flex justify-center items-center gap-3">
          <div className="adminpage__routing-filter w-9 h-8 flex justify-center items-center rounded-md">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.33398 11.6667L3.33398 4.16667V2.5H16.6673V4.16667L11.6673 11.6667V16.6667L8.33398 18.3333V11.6667Z"
                fill="#151515"
              />
            </svg>
          </div>

          <div className="adminpage__routing-add w-32 h-8 flex justify-center items-center rounded-md">
            <p className="font-semibold">Add Voucher</p>
          </div>
        </div>
      </div>

      <div className="w-full h-full pl-4 pr-8 pb-4 overflow-hidden">
      <div className="adminpage__routing-vouchers w-full h-full pl-1 pr-4 overflow-y-auto">
        {data.map((category, index) => (
          <Category
            key={index}
            categoryName={category.title}
            items={category.items}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Routing;
