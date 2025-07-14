import { useState } from "react";
import "./App.css";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import NavBar from "./components/NavBar";
import { useGlobalContext } from "./context/allContext";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

function App() {
  const showSignup=true;
  const {showAddEmployee,showLogin,showSignUp}=useGlobalContext()
  return (
    <>
      <NavBar />
      <EmployeeTable />
      {showAddEmployee && <EmployeeForm/>}
      {showLogin && <LoginForm/>}
      {showSignUp && <SignupForm/>}
    </>
  );
}

export default App;
