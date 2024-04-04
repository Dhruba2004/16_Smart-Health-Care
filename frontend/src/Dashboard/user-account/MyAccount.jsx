import React from "react";
import { useContext, useState } from "react";
import userImg from "../../assets/images/doctor-img01.png";
import Navbar from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import MyBookings from "./MyBookings";
import Profile from "./Profile";

const MyAccount = () => {
  const [tab, setTab] = useState("bookings");
  const { dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <>
      <Navbar />
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="pb-[50px] px-[30px] rounded-md">
            <div className="flex items-center justify-center">
              <figure className="w-[100px] h-[100px] rounded-full border-2 border-primaryColor border-solid">
                <img
                  src={userImg}
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </figure>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-[20px] leading-[30px] text-headingColor font-bold">
                Jay Sarkar
              </h3>
              <p className="text-textColor text-[13px] leading-6 font-medium">
                example@gmail.com
              </p>
              <p className="text-textColor text-[13px] leading-6 font-medium">
                Blood Type:
                <span className="ml-2 text-headingColor text-[22px] leading-8">
                  O-
                </span>
              </p>
            </div>

            <div className="mt-[50px] md:mt-[100px]">
              <button
                className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
              <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
                Delete account
              </button>
            </div>
          </div>
          <div className="md:col-span-2 md:px-[30px]">
            <div>
              <button
                onClick={() => setTab("bookings")}
                className={` ${tab==='bookings' && 'bg-primaryColor text-white font-normal'} p-2 mr-5 px-5 rouned-md text-headingColor font-semibold text-[16px] rounded-md  leading-7 border border-primaryColor border-solid`}
              >
                My Bookings
              </button>
              <button
                onClick={() => setTab("settings")}
                className={` ${tab==='settings' && 'bg-primaryColor text-white font-normal'} py-2 px-5 rouned-md text-headingColor font-semibold text-[16px]  leading-7 border rounded-md border-primaryColor border-solid`}
              >
                Profile Settings
              </button>
            </div>
            {tab === "bookings" ? <MyBookings /> : <Profile />}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
