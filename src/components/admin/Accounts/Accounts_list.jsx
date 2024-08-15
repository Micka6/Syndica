    import React from "react";
    import '../../../css/admin/accounts/account_list.css'
    import Tabledata from "./Tabledata";

    const Accounts_list = () => {

    return (
        <div className="adminpage_accounts-table-container w-full h-full pr-4 overflow-y-auto">
        <div className="adminpage_accounts-table w-full h-full">
        <table className="w-full divide-y divide-gray-200 border-collapse">
            <thead className="adminpage__accounts-tablehead bg-white">
            <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
            </thead>
            <Tabledata/>
            
        </table>
    </div>
    </div>

    );
    };

    export default Accounts_list;
