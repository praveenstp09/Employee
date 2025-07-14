import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import Input from "./Input";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/allContext";
import axios from "axios";

const SignupForm = () => {
  const { setShowSignUp } = useGlobalContext();
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignupData({ ...signupData, [name]: value });
  };
  const handleCloseBtn = () => {
    setShowSignUp(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/signup", signupData);
      alert("User registered successfully!");
      setShowSignUp(false);
    } catch (err) {
      console.error("Signup failed", err);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-[100%] h-[100%] bg-black/85 flex justify-center items-center z-50">
      <div className="md:w-[50%] m-auto p-5 md:p-10 bg-white">
        <div className="flex justify-end" onClick={handleCloseBtn}>
          <CiCircleRemove size={30} />
        </div>
        <h1 className="text-3xl font-semibold text-center mb-1">
          Sign up to your account
        </h1>
        <p className="mt-2 text-center text-base text-black/60">
          Have any account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline hover:text-blue-600"
          >
            Sign In
          </Link>
        </p>
        <form action="" onSubmit={handleSubmit}>
          <div className="grid gap-6">
            <Input
              type="text"
              placeholder="Enter Name"
              label="Name"
              name="name"
              required="required"
              value={signupData.name}
              onChange={onChange}
            />
            <Input
              type="email"
              placeholder="Enter Email"
              label="Email"
              name="email"
              required="required"
              value={signupData.email}
              onChange={onChange}
            />
            <Input
              type="password"
              placeholder="Enter Password"
              label="Password"
              name="password"
              required="required"
              value={signupData.password}
              onChange={onChange}
            />
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-600 p-3 text-white w-[40%] text-lg font-semibold rounded"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
