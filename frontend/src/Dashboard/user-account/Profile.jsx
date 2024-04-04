import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import uploadImageCloudinary from "../../utils/uploadImageCloudinary";
import { BASE_URL } from "../../config";
import HashLoader from "react-spinners/HashLoader";
import axios from "axios";

const Profile = () => {
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
    <div>
        <form action="">
                <div className="mt-5">
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
                </div>
              </form>
    </div>
  )
}

export default Profile