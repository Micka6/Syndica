import React from 'react'
import Datetimedisplay from './Datetimedisplay'
import '../../css/admin/dashboard/header.css'

const Header = ({ currentPage }) => {
  return (
    <div className="adminpage__header w-screen h-16 pl-56 pr-6 flex items-center justify-between fixed">
            <div className="adminpage__header-inner w-fit">
                <h1 className="adminpage__header-text ml-6 text-2xl">{ currentPage }</h1>
            </div>
            <div className="adminpage__user-options w-fit flex items-center gap-6">
                <div className="adminpage__date-time">
                    <Datetimedisplay/>
                </div>
                <button type="button" className="adminpage__notification w-8 h-8 flex items-center justify-center">
                    <svg fill="#151515" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M26.8,25H5.2c-0.8,0-1.5-0.4-1.9-1.1c-0.4-0.7-0.3-1.5,0.1-2.2L4.5,20c1.8-2.7,2.7-5.8,2.7-9c0-3.7,2.4-7.1,5.9-8.3 C13.7,1.6,14.8,1,16,1s2.3,0.6,2.9,1.7c3.5,1.2,5.9,4.6,5.9,8.3c0,3.2,0.9,6.3,2.7,9l1.1,1.7c0.4,0.7,0.5,1.5,0.1,2.2 C28.4,24.6,27.6,25,26.8,25z"></path> </g> <path d="M11.1,27c0.5,2.3,2.5,4,4.9,4s4.4-1.7,4.9-4H11.1z"></path> </g></svg>
                </button>
                <img className="adminpage__profile-icon w-9 h-9 rounded-full" src="" alt="" />
            </div>
        </div>
  )
}

export default Header
