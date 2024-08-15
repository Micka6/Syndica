import React, { useState, useEffect } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";
import Dashboard from "../../components/admin/dashboard/AdminDashboard";
import Accounts from "../../components/admin/Accounts/Accounts";
import Routing from "../../components/admin/routing/Routing";
import Auditlogs from "../../components/admin/auditlog/Auditlog";
import "../../css/admin/dashboard/adminpage.css";
import "../../css/admin/dashboard/admin-responsive.css";

const Adminpage = () => {
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem("currentPage") || "Dashboard";
  });

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case "Dashboard":
        return <Dashboard />;
      case "Accounts":
        return <Accounts />;
      case "Routing":
        return <Routing />;
      case "Auditlogs":
        return <Auditlogs />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="adminpage-container w-screen flex">
      <Sidebar setCurrentPage={setCurrentPage} />
      <Header currentPage={currentPage} />
      <div className="adminpage__content-container w-full p-6 overflow-hidden">
        {renderContent()}
      </div>
    </div>
  );
};

export default Adminpage;
