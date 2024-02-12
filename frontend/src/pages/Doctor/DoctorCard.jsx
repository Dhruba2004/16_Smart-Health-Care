import React from "react";
import starIcon from "../../assets/images/Star.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const DoctorCard = ({ doctor }) => {
  const {
    name,
    avgRating,
    totalRating,
    photo,
    specialization,
    totalPatients,
    hospital,
  } = doctor;
  return (
    <div className="container">
      <div className="p-3 lg:p-5 bg-[#fff9ea] shadow-panelShadow w-[70%] rounded-3xl gap-[1rem]">
        <div className="">
          <img src={photo} className="w-[100%] rounded-xl" />
        </div>
        <div></div>
        <h2 className="text-[14px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-700 mt-3 text-center">
          {name}
        </h2>
        <div className="flex mt-2 lg:mt-4 items-center justify-between gap-[12px]">
          <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[18px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
            {specialization}
          </span>

          <div className="flex items-center gap-[28px] mt-[10px] justify-between mr-[6rem]">
            <span className="flex items-center gap-[6px] text-[14px] lg:text-[16px] leading-7 font-semibold text-headingColor">
              <img src={starIcon} />
              {avgRating}
            </span>
            <span className="text-[14px] lg:text-[16px] leading-7  text-headingColor">
              ({totalRating})
            </span>
          </div>
        </div>
        <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
          <div>
            <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px]  text-headingColor">
              +{totalPatients} patients
            </h3>
            <p className="text-[14px] font-[400] leading-6">{hospital}</p>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <Link className="bg-primaryColor px-4 py-3 text-[#fff] mt-4 rounded-xl" to="/booking">
            <h2 className="text-[#fff] leading-7"> Book appointment</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
