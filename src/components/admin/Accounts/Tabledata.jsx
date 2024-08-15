import React from 'react';
import Tabledatarow from './Tabledatarow';

const Tabledata = () => {
    const data = [
        { id: '21071901', firstname: 'Aldous', lastname: 'Red', role: 'Officer', status: 'Active', position: 'Regional Director' },
        { id: '21071902', firstname: 'Gusion', lastname: 'Blue', role: 'Designer', status: 'Suspended', position: 'Visual Director' },
        { id: '21071903', firstname: 'Alpha', lastname: 'Omega', role: 'Secret', status: 'Suspended', position: 'Visual Director' },
        { id: '21071904', firstname: 'Axl', lastname: 'Coronel', role: 'Officer', status: 'Suspended', position: 'Regional Officer' },
        { id: '21071905', firstname: 'Random', lastname: 'Person', role: 'Officer', status: 'Active', position: 'Regional Officer' },
        { id: '21071906', firstname: 'Random', lastname: 'Person', role: 'Officer', status: 'Inactive', position: 'Regional Officer' },
        { id: '21071907', firstname: 'Random', lastname: 'Person', role: 'Officer', status: 'Suspended', position: 'Regional Officer' },
        { id: '21071908', firstname: 'Random', lastname: 'Person', role: 'Officer', status: 'Suspended', position: 'Regional Officer' },
        { id: '21071909', firstname: 'Random', lastname: 'Person', role: 'Officer', status: 'Active', position: 'Regional Officer' },
        
    ];

    return (
        <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
                <Tabledatarow 
                    key={index} 
                    id={item.id} 
                    firstname={item.firstname} 
                    lastname={item.lastname} 
                    role={item.role} 
                    status={item.status} 
                    position={item.position} 
                />
            ))}
        </tbody>
    );
};

export default Tabledata;
