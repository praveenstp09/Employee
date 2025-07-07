import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const NavBar = () => {
  const {setShowAddEmployee}=useGlobalContext()
  const handleAddLink=()=>{
    setShowAddEmployee(true)
  }
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="flex items-center px-6 py-4 ">
        <div className="text-2xl font-bold text-orange-600 ">
          <Link href="/">Employee Info</Link>
        </div>

        <div className="hidden md:flex justify-center w-[70%]">
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
      </div>
    </nav>
  );
};

export default NavBar;
