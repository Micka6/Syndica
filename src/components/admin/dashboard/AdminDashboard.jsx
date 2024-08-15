import React from "react";
import "../../../css/admin/dashboard/admindashboard.css";
import Totalcard from "../../../components/admin/dashboard/Totalcard";
import Vouchercard from "../../../components/admin/dashboard/Vouchercard";
import Frequentcard from "../../../components/admin/dashboard/Frequentcard";
import Accountcard from "../../../components/admin/dashboard/Accountcard";
import Ticket from "./Ticket";
import Calendar from "../../../components/admin/dashboard/Calendar";


const AdminDashboard = () => {
  return (
    <div className="adminpage__dashboard-container w-full h-full flex gap-2">
      <div className="adminpage__col w-9/12 h-full flex flex-col">
        <div className="adminpage__total-container w-full h-[7.5rem] py-2 flex flex-wrap justify-between">
        <Totalcard/>
        </div>
        <div className="adminpage__voucher-container w-full h-[12.625rem] py-3 flex flex-wrap justify-between ">
        <Vouchercard/>
        <Frequentcard/>
        </div>

        <div className="adminpage__account-container w-full h-[16.325rem] py-2 flex">
        <Accountcard/>
        </div>
      </div>

      <div className="adminpage__col w-3/12 h-full flex flex-col justify-center">
        <div className="adminpage__calendar-container w-full h-[20.125rem] px-2 pt-2 pb-3">
        <Calendar/>
        </div>

        <div className="adminpage__ticket-container w-full h-[16.325rem] flex p-2">
        <Ticket/>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
