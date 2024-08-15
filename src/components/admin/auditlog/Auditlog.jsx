import React from "react";
import "../../../css/admin/auditlogs/auditlog.css";
import Auditlog_list from "./Auditlog_list";

const Auditlog = () => {
  return (
    <div className="adminpage__auditlog-container w-full h-full flex flex-col rounded-xl">
      <div className="adminpage__auditlog-top w-full h-15 p-4 flex justify-between items-center">
        <h3>Logs</h3>
        <div className="w-[15.625rem] flex justify-center items-center gap-3">
          <div className="adminpage__auditlog-filter w-9 h-8 flex justify-center items-center rounded-md">
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

          <div className="adminpage__auditlog-search w-full h-full flex justify-between items-center rounded-md ">
            <input type="text" className="adminpage__auditlog-search-box w-full h-8 px-2 rounded-md text-sm placeholder-gray-400" placeholder="Search" />
          </div>
        </div>
      </div>

      <div className="adminpage__auditlog-data w-full h-full pl-4 pr-8 pb-5 overflow-hidden">
        <Auditlog_list/>
      </div>
    </div>
  );
};

export default Auditlog;
