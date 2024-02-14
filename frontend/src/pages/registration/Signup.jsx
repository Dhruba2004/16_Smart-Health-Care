import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import sigupImg from "../../assets/images/signup.gif";
import { toast } from "react-toastify";
import uploadImageCloudinary from "../../utils/uploadImageCloudinary";
import { BASE_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageCloudinary(file);
    console.log(data);

    setPreviewURL(data.url);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${BASE_URL}/api/v1/auth/register`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.data.success) {
        throw new Error(res.data.message);
      }
      setLoading(false);
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      console.log(BASE_URL);
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="px-5 xl:px-0">
        <div className="max-w-[1170px] mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="hidden lg:block bg-primaryColor rounded-l-lg">
              <figure className="rounded-l-lg">
                <img src={sigupImg} className=" rounded-l-lg" />
              </figure>
            </div>

            <div className="rounded-l-lg lg:pl-16 py-10">
              <h3 className="text-headingColor text-[22px]">
                Create an <span className="text-primaryColor">account</span>{" "}
              </h3>
              <form action="">
                <div className="mb-5">
                  <input
                    type="name"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder::text-textColor cursor-pointor rounded-md bg-transparent"
                  />
                </div>
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

                <div className="mb-5 flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-headingColor font-bold text-[16px] leading-7"
                  >
                    Are you a :
                    <select
                      name="role"
                      className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none bg-transparent"
                    >
                      <option value="patient">Patient</option>
                      <option value="doctor">Doctor</option>
                    </select>
                  </label>
                  <label
                    htmlFor=""
                    className="text-headingColor font-bold text-[16px] leading-7"
                  >
                    Gender :
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none bg-transparent"
                    >
                      <option value="male">male</option>
                      <option value="female">female</option>
                      <option value="other">other</option>
                    </select>
                  </label>
                </div>

                <div className="mb-5 flex items-center gap-3">
                  {selectedFile && (
                    <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor">
                      <img src={previewURL} className="w-full rounded-full" />
                    </figure>
                  )}
                  <div className="relative w-[100px] h-[50px]">
                    <input
                      onChange={handleFileInputChange}
                      type="file"
                      name="photo"
                      id="customFile"
                      accept=".jpg,.png"
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <label
                      htmlFor="customFile"
                      className="absolute top-0 left-0 h-full flex items-center px-[0.75rem] py-[0.375rem] text-[16px] leading-6 overflow-hidden bg-[#c6317746] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                    >
                      upload photo
                    </label>
                  </div>
                </div>
                <div className="mt-7">
                  <button
                    disabled={loading && true}
                    onClick={submitHandler}
                    className="bg-primaryColor w-full text-[#fff] text-[18px] leading-[30px] px-4 py-3 rounded-xl"
                    type="submit"
                  >
                    {loading ? (
                      <HashLoader size={35} color="#ffffff" />
                    ) : (
                      "Register"
                    )}
                  </button>
                  <p className="mt-5 text-textColor text-center">
                    Already have a account ?
                    <Link
                      to="/login"
                      className="text-primaryColor font-medium ml-1"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
