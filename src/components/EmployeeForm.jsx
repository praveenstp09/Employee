import React, { useState } from "react";
import Input from "./Input";
import { CiCircleRemove } from "react-icons/ci";
import { useGlobalContext } from "../context";

const EmployeeForm = () => {
  const { addEmployee, setShowAddEmployee,formData,setFormData,edit,editEmployee } = useGlobalContext();

  const handleCloseBtn = () => {
    setShowAddEmployee(false);
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const updateForm = { ...formData, [name]: value };
    setFormData(updateForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    if(edit){
        // console.log("edit form")
        editEmployee(edit.id)
    }else{
        addEmployee(formData);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-[100%] h-[100%] bg-black/85 flex justify-center items-center z-50">
      <div className="md:w-[60%] m-auto p-5 md:p-10 bg-white">
        <div className="flex justify-end" onClick={handleCloseBtn}>
          <CiCircleRemove size={30} />
        </div>
        <h1 className="text-2xl font-bold text-center mb-5">Add Information</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="grid gap-6">
            <Input
              type="text"
              placeholder="Enter Name"
              label="Name"
              name="name"
              required="required"
              value={formData.name}
              onChange={onChange}
            />
            <Input
              type="email"
              placeholder="Enter Email"
              label="Email"
              name="email"
              required="required"
              value={formData.email}
              onChange={onChange}
            />
            <Input
              type="text"
              placeholder="Enter Position"
              label="Position"
              name="position"
              required="required"
              value={formData.position}
              onChange={onChange}
            />
            <Input
              type="text"
              placeholder="Enter Salary"
              label="Salary"
              name="salary"
              required="required"
              value={formData.salary}
              onChange={onChange}
            />
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 p-3 text-white w-[40%] text-lg font-semibold rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
