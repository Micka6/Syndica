import React from "react";
import '../../../css/admin/dashboard/filter.css'

const FilterDropdown = () => {
    return (
      <div className="adminpage__filter-dropdown">
        <a href="#">1 Day</a>
        <a href="#">7 Days</a>
        <a href="#">1 Month</a>
      </div>
    );
  };
  
const Filter = () => {
  return (
    <div className="adminpage__filter-container w-[5.625rem] h-full flex items-center justify-evenly">
      <div className="adminpage__filter-icon flex justify-center items-center">
        <svg
          width="15"
          height="15"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.00065 0.333008V1.66634H9.00065V0.333008H10.334V1.66634H13.0007C13.3689 1.66634 13.6673 1.96482 13.6673 2.33301V12.9997C13.6673 13.3679 13.3689 13.6663 13.0007 13.6663H1.00065C0.632464 13.6663 0.333984 13.3679 0.333984 12.9997V2.33301C0.333984 1.96482 0.632464 1.66634 1.00065 1.66634H3.66732V0.333008H5.00065ZM12.334 6.99967H1.66732V12.333H12.334V6.99967ZM4.33398 8.33301V9.66634H3.00065V8.33301H4.33398ZM7.66732 8.33301V9.66634H6.33398V8.33301H7.66732ZM11.0007 8.33301V9.66634H9.66732V8.33301H11.0007ZM3.66732 2.99967H1.66732V5.66634H12.334V2.99967H10.334V4.33301H9.00065V2.99967H5.00065V4.33301H3.66732V2.99967Z"
            fill="#151515"
          />
        </svg>
      </div>
      <p className="adminpage__filter-text text-[1rem]">Today</p>
      <FilterDropdown />
    </div>
  );
};

export default Filter;
