import React, { useState } from 'react';
import '../../../css/admin/accounts/accountdatarow.css';

const TabledataRow = ({ id, firstname, lastname, role, status: initialStatus, position }) => {
    const [status] = useState(initialStatus);

    const getStatusClass = () => {
        if (status === 'Active') return 'adminpage__status-active flex justify-center items-center w-20';
        if (status === 'Inactive') return 'adminpage__status-inactive flex justify-center items-center w-24';
        if (status === 'Suspended') return 'adminpage__status-suspended flex justify-center items-center w-28';
        return 'w-24'; // Default width if no status matches
    };

    return (
        <tr className="adminpage__accountdata_tr">
            <td className="px-6 whitespace-nowrap">{id}</td>
            <td className="px-5 whitespace-nowrap">{firstname}</td>
            <td className="px-5 whitespace-nowrap">{lastname}</td>
            <td className="px-6 whitespace-nowrap">{role}</td>
            <td className="px-6 whitespace-nowrap">
                <div className={`px-4 py-1 rounded-md text-white ${getStatusClass()}`}>
                    {status}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{position}</td>
            <td className="pl-6 py-4 whitespace-nowrap">
                <div className="adminpage__action-container max-w-24 flex gap-1">
                    <div className="adminpage__action-archive w-7 h-7 flex justify-center items-center">
                        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00002 0C10.4889 0 13.3915 2.37096 14 5.5C13.3915 8.62901 10.4889 11 7.00002 11C3.51111 11 0.60854 8.62901 0 5.5C0.60854 2.37096 3.51111 0 7.00002 0ZM7.00002 9.77778C9.74059 9.77778 12.0857 7.97622 12.6793 5.5C12.0857 3.0238 9.74059 1.22222 7.00002 1.22222C4.25939 1.22222 1.9143 3.0238 1.32068 5.5C1.9143 7.97622 4.25939 9.77778 7.00002 9.77778ZM7.00002 8.25C5.39194 8.25 4.08835 7.01879 4.08835 5.5C4.08835 3.98122 5.39194 2.75 7.00002 2.75C8.60802 2.75 9.91166 3.98122 9.91166 5.5C9.91166 7.01879 8.60802 8.25 7.00002 8.25ZM7.00002 7.02778C7.89338 7.02778 8.6176 6.34376 8.6176 5.5C8.6176 4.65624 7.89338 3.97222 7.00002 3.97222C6.10666 3.97222 5.38241 4.65624 5.38241 5.5C5.38241 6.34376 6.10666 7.02778 7.00002 7.02778Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="adminpage__action-edit w-7 h-7 flex justify-center items-center">
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.82843 10.3962H0V7.63435L7.62333 0.190659C7.88373 -0.063553 8.3058 -0.063553 8.56613 0.190659L10.4518 2.03185C10.7121 2.28606 10.7121 2.69822 10.4518 2.95244L2.82843 10.3962ZM0 11.6981H12V13H0V11.6981Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="adminpage__action-delete w-7 h-7 flex justify-center items-center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 1.2H12V2.4H10.8V11.4C10.8 11.7314 10.5314 12 10.2 12H1.8C1.46863 12 1.2 11.7314 1.2 11.4V2.4H0V1.2H3V0H9V1.2ZM4.2 4.2V9H5.4V4.2H4.2ZM6.6 4.2V9H7.8V4.2H6.6Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </td>   
        </tr>
    );
};

export default TabledataRow;
