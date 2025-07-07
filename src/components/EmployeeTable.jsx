import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoMdRemoveCircle } from "react-icons/io";
import { useGlobalContext } from "../context";

const EmployeeTable = () => {
  const {
    employees,
    setShowAddEmployee,
    deleteEmployee,
    editEmployee,
    setFormData,
    setEdit
  } = useGlobalContext();

  const handleAddBtn = () => {
    setShowAddEmployee(true);
  };
  const handleEdit = (emp) => {
    setFormData(emp);
    setEdit(emp)
    setShowAddEmployee(true);
  };
  return (
    <div className="">
      <div className="mt-10 overflow-x-auto">
        <table className="w-[70%] m-auto mt-6 rounded-md table-auto">
          <thead className="bg-gray-100 text-left">
            <tr className="">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Position</th>
              <th className="px-4 py-2">Salary</th>
              <th className="px-4 py-2">Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => {
              return (
                <tr className="border-b" key={emp.id}>
                  <td className="px-4 py-2 font-semibold">{emp.name}</td>
                  <td className="px-4 py-2">{emp.email}</td>
                  <td className="px-4 py-2">{emp.position}</td>
                  <td className="px-4 py-2">{emp.salary}</td>
                  <td>
                    <div className="flex gap-2 items-center justify-items-center">
                      <button onClick={() => handleEdit(emp)}>
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => {
                          deleteEmployee(emp.id);
                        }}
                      >
                        <IoMdRemoveCircle fontSize={23} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="md:w-[70%] m-auto flex justify-end mt-3">
          <button
            className="bg-orange-600 px-2 py-2 text-white text-lg font-semibold rounded"
            onClick={handleAddBtn}
          >
            Add More Employee
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
