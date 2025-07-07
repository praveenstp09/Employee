import { useState } from "react";
import "./App.css";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import NavBar from "./components/NavBar";
import { useGlobalContext } from "./context";
function App() {
  const {showAddEmployee}=useGlobalContext()
  return (
    <>
      <NavBar />
      <EmployeeTable />
      {showAddEmployee && <EmployeeForm/>}
    </>
  );
}

export default App;
