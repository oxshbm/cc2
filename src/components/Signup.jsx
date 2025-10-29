import React from "react";
import students1 from "../assets/students1.svg";
import students2 from "../assets/students2.svg";
import {  useNavigate } from "react-router-dom";

export default function Signup() {

   const navigate = useNavigate();

   const goToLogin = () =>{
      navigate("/")
   }
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfaf6] px-4">
      {/* Outer container */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-10">
        
        {/* Left Illustration */}
        <div className="hidden md:flex flex-col items-center justify-center flex-1">
          <img
            src={students1}
            alt="students"
            className="w-[80%] max-w-sm object-contain"
          />
        </div>

        {/* Signup Card */}
        <div className="bg-white shadow-lg rounded-2xl p-8 sm:p-10 w-full sm:w-[400px] flex flex-col justify-center border border-[#f2e8dc]">
          <h1 className="text-4xl font-extrabold text-[#ff5e5b] text-center mb-8 font-[Poppins]">
            Create Account
          </h1>

          <form className="flex flex-col space-y-5">
            {/* Full Name */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5e5b]"
              />
            </div>

            {/* Personal Email */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Personal Email
              </label>
              <input
                type="email"
                placeholder="you@gmail.com"
                className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5e5b]"
              />
            </div>

            {/* Institute Email */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Institute Email
              </label>
              <input
                type="email"
                placeholder="you@college.edu"
                className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5e5b]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a strong password"
                className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5e5b]"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Re-enter password"
                className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5e5b]"
              />
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="bg-[#ff5e5b] text-white py-2 rounded-xl font-semibold hover:bg-[#ff4744] transition-all duration-200" 
            >
              Sign Up
            </button>

            {/* Social Signup */}
            <p className="text-sm text-center text-gray-500 mt-2">
              or sign up with
            </p>

            <div className="flex justify-center space-x-3">
              <button className="flex items-center justify-center gap-2 border border-gray-300 py-2 px-4 rounded-xl hover:bg-gray-50 transition-all">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                  alt="Google"
                  className="w-5"
                />
                Google
              </button>
            </div>
          </form>

          <p className="text-sm text-center text-gray-500 mt-6">
            Already have an account?{" "}
            <a onClick={goToLogin}  className="text-[#ff5e5b] font-medium hover:underline">
              Log in
            </a>
          </p>
        </div>

        {/* Right Illustration */}
        <div className="hidden md:flex flex-col items-center justify-center flex-1">
          <img
            src={students2}
            alt="students"
            className="w-[80%] max-w-sm object-contain"
          />
        </div>
      </div>
    </div>
  );
}
