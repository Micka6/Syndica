import React from "react";
import Accounts_list from "./Accounts_list";
import "../../../css/admin/accounts/accounts.css";

const Accounts = () => {
  return (
    <div className="adminpage__accounts-container w-full h-full flex flex-col rounded-xl">
      <div className="adminpage__accounts-top w-full h-15 p-4 flex justify-between items-center">
        <h3>Account List</h3>
        <div className="w-[10.937rem] flex justify-center items-center gap-3">
          <div className="adminpage__accounts-filter w-9 h-8 flex justify-center items-center rounded-md">
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

          <div className="adminpage__accounts-add w-32 h-8 flex justify-center items-center rounded-md">
            <p className="font-semibold">Add Account</p>
          </div>
        </div>
      </div>

      <div className="adminpage__accounts-data w-full h-full pl-4 pr-8 py-2 overflow-hidden">
        <Accounts_list/>
      </div>
    </div>
  );
};

export default Accounts;
