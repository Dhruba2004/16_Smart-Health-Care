import React, { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext.jsx";
import HashLoader from "react-spinners/HashLoader";
import { BASE_URL } from "../../config.js";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  const { dispatch } = useContext(AuthContext);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/auth/login`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.data) {
        throw new Error("No response data received");
      }
      const {
        token,
        data: { role },
      } = res.data;
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: res.data,
          token,
          role,
        },
      });
      setLoading(false);
      navigate("/");
      console.log("navigating to home page");
      toast.success(res.data.message);
      } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="px-5 lg:px-0">
        <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 mt-[6rem]">
          <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
            Hello! <span className="text-primaryColor">Welcome</span> Back 🙌{" "}
          </h3>
          <form className="px-4 md:py-0">
            <div className="mb-5">
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder::text-textColor cursor-pointor rounded-md bg-transparent"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder::text-textColor cursor-pointor rounded-md bg-transparent"
                required
              />
            </div>
            <div className="mt-7">
              <button
                disabled={loading && true}
                onClick={submitHandler}
                className="bg-primaryColor w-full text-[#fff] text-[18px] leading-[30px] px-4 py-3 rounded-xl"
                type="submit"
              >
                {loading ? <HashLoader color="#ffffff" size={30} /> : "Login"}
              </button>
            </div>
            <p className="mt-5 text-textColor text-center">
              Don&apos;t have account ?
              <Link
                to="/register"
                className="text-primaryColor font-medium ml-1"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
