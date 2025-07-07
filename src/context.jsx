import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
const AppContext = createContext();

const data = { name: "" };
const AppProvider = ({ children }) => {
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    salary: "",
  });

  const [edit, setEdit] = useState(null);

  const getEmployee = async () => {
    try {
      const Employees = await axios.get("http://localhost:3000/employees");
      // console.log(Employees.data);
      setEmployees(Employees.data);
    } catch (err) {
      console.log(err);
    }
  };
  const addEmployee = async (formData) => {
    try {
      // console.log(formData);
      const add = await axios.post("http://localhost:3000/employees", formData);
      //   console.log(add.data);
      const updatedEmployees = [...employees, formData];
      setEmployees(updatedEmployees);

      alert("added Successfully");
      setShowAddEmployee(false);
    } catch (err) {
      console.log("error", err);
    }
  };
  const deleteEmployee = async (id) => {
    // console.log("delete");
    try {
      await axios.delete(`http://localhost:3000/employees/${id}`);
      const updatedEmployees = employees.filter((emp) => emp.id !== id);
      setEmployees(updatedEmployees);
      alert("deleted Succeesfully");
    } catch (err) {
      console.log(err);
    }
  };
  const editEmployee = async (id) => {
    // console.log(formData);
    try {
      const res = await axios.put(
        `http://localhost:3000/employees/${id}`,
        formData
      );
      console.log(res);
      setEdit(null);
      setShowAddEmployee(false);
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
