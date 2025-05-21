import React, { useState, useRef, useEffect } from 'react'
import { 
  FaUser,
  FaBell,
  FaBook,
  FaCrown,
  FaPowerOff} from "react-icons/fa"
import {Button} from '..'
import { useSelector } from 'react-redux'

const ProfileBtn = () => {
  const user = useSelector((state)=> state.auth.userData)
  const [open, setOpen] = useState(false)
  const menuRef = useRef()

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  return (
    <div className="relative inline-block text-left" ref={menuRef}>
    <Button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 w-full max-w-xs"
    onclick={()=> setOpen(!open)}>
       <FaUser className="mr-2 text-orange-600" />
        <span className="font-medium text-sm sm:text-base">{user.username}</span>
        <svg
          className="ml-2 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    </Button>


    <div
        className={`transition-all duration-200 ease-out origin-top-right transform absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="py-1 text-sm text-gray-700">
          <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <FaUser className="text-orange-600 mr-2" /> Profile
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <FaBell className="text-orange-600 mr-2" /> Alerts
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <FaBook className="text-orange-600 mr-2" /> Notebook
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <FaCrown className="text-orange-600 mr-2" /> Upgrade
          </li>
          <li className="border-t border-gray-200 mt-1">
            <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <FaPowerOff className="text-orange-600 mr-2" /> Logout
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileBtn