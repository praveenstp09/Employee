import React, { useState, useEffect } from "react";
import { CiCircleRemove } from "react-icons/ci";
import Input from "./Input";
import { Link } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../context/allContext";
const LoginForm = () => {
  const { setShowLogin, setShowSignUp } = useGlobalContext();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
  };
  const handleCloseBtn = () => {
    setShowLogin(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", loginData);
      const { token, user} = res.data;
      // console.log(token,user);
      localStorage.setItem("token", token);
      localStorage.setItem("name", user.name);
      setShowLogin(false);
      alert("Login successful");
    } catch (err) {
      console.error("Login failed", err);
      alert("Invalid email or password");
    }
  };

  const handleSignUpBtn = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };

  return (
    <div className="fixed top-0 left-0 w-[100%] h-[100%] bg-black/85 flex justify-center items-center z-50">
      <div className="md:w-[50%] m-auto p-5 md:p-10 bg-white">
        <div className="flex justify-end" onClick={handleCloseBtn}>
          <CiCircleRemove size={30} />
        </div>
        <h1 className="text-3xl font-semibold text-center mb-1">
          Sign in to your account
        </h1>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <span
            onClick={handleSignUpBtn}
            className="font-medium text-primary transition-all duration-200 hover:underline hover:text-blue-500"
          >
            Sign Up
          </span>
        </p>
        <form action="" onSubmit={handleSubmit}>
          <div className="grid gap-6">
            <Input
              type="email"
              placeholder="Enter Email"
              label="Email"
              name="email"
              required="required"
              value={loginData.email}
              onChange={onChange}
            />
            <Input
              type="password"
              placeholder="Enter Password"
              label="Password"
              name="password"
              required="required"
              value={loginData.password}
              onChange={onChange}
            />
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-600 p-3 text-white w-[40%] text-lg font-semibold rounded"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
