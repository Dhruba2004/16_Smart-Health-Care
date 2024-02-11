import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container bg-sky-200 h-[800px] pt-7 mx-auto">
        <div className="flex justify-center items-center flex-col mt-[7rem] gap-[12px] bg-gray-700 max-w-[50%] mx-auto rounded-2xl py-3 px-7 h-[400px] w-[400px] relative">
          <form
            action="POST
        "
          >
            <div className="flex flex-col gap-[22px]">
              <h1 className="text-center text-[#fff] text-[26px]">Login</h1>
              <input
                type="text"
                placeholder="name"
                className="block outline-none bg-transparent border-b-2 border-[#fff] w-[100%] mx-auto"
              />
              <input
                type="password"
                placeholder="password"
                className="block outline-none bg-transparent border-b-2 border-[#fff] w-[100%] mx-auto"
              />
              <div className="flex justify-center items-center mt-4 gap-[1rem] flex-col">
                <button className="bg-sky-800 text-[#fff]  font-bold px-4 py-2  w-[50%] rounded-2xl hover:bg-[#9acd32] hover:text-[#fff] hover:font-bold">
                  Submit
                </button>
                <p className="text-[#fff]">
                  Don't have a account? <Link to="/register">Register here</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
