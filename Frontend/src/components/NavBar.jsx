import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/allContext";
import { FaUser, FaSearch } from "react-icons/fa";
import { useAuthContext } from "./../context/authContext";
const NavBar = () => {
  const { setShowAddEmployee, setShowLogin } = useGlobalContext();

  const { logged, userName } = useAuthContext();
  const handleAddLink = () => {
    setShowAddEmployee(true);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="flex items-center justify-between px-6 py-4 ">
        <div className="text-2xl font-bold text-orange-600 ">
          <Link href="/">Employee Info</Link>
        </div>

        <div className="hidden md:flex justify-center">
          <ul className="flex space-x-6 text-sm font-medium text-gray-700 uppercase">
            <li>
              <Link href="/" className="hover:text-orange-600">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={handleAddLink} className="hover:text-orange-600">
                Add Employee
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center relative">
            <input
              type="text"
              placeholder="Search products..."
              className="px-3 py-1 pl-9 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
            <FaSearch className="absolute left-2 text-gray-500" />
          </div>

          {logged == true ? (
            <div className="flex gap-1 justify-center items-center">
              <div className="rounded-full border border-gray-500 p-[0.3rem]">
                <FaUser className="text-gray-700 cursor-pointer hover:text-orange-600" />
              </div>
              <p className="font-medium">{userName}</p>
            </div>
          ) : (
            <div>
              <button
                className="bg-orange-600 rounded-lg px-3 py-[0.15rem] font-semibold text-white"
                onClick={() => {
                  setShowLogin(true);
                }}
              >
                login
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
