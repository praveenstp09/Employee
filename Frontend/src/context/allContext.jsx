import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const intialData = { name: "", email: "", position: "", salary: "" };
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState(intialData);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [edit, setEdit] = useState(null);

  const getEmployee = async () => {
    try {
      const Employees = await axios.get("/api/employees");
      // console.log(Employees.data);
      setEmployees(Employees.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addEmployee = async (formData) => {
    try {
      // console.log(formData);
      const add = await axios.post("api/employees", formData);
      // console.log(add.data);
      const updatedEmployees = [...employees, add.data.employee];
      setEmployees(updatedEmployees);
      alert("added Successfully");
      setFormData(intialData)
      setShowAddEmployee(false);
    } catch (err) {
      console.log("error", err);
    }
  };

  const deleteEmployee = async (id) => {
    // console.log("delete");
    try {
      await axios.delete(`api/employees/${id}`);
      const updatedEmployees = employees.filter((emp) => emp._id !== id);
      setEmployees(updatedEmployees);
      // getEmployee()
      alert("deleted Succeesfully");
    } catch (err) {
      console.log(err);
    }
  };
  const editEmployee = async (id) => {
    // console.log(formData);
    try {
      const res = await axios.put(`api/employees/${id}`, formData);
      console.log(res);
      setEdit(null);
      setShowAddEmployee(false);
      setFormData(intialData);
      getEmployee();
      alert("eddited Succesfully");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEmployee();
  }, []);

  return (
    <AppContext.Provider
      value={{
        setShowAddEmployee,
        employees,
        showAddEmployee,
        addEmployee,
        deleteEmployee,
        formData,
        setFormData,
        edit,
        setEdit,
        editEmployee,
        setShowLogin,
        showLogin,
        showSignUp,
        setShowSignUp
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
