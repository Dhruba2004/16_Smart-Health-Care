import React, { useState, useEffect } from "react";
import starIcon from "../../assets/images/Star.png";
import Feedback from "./Feedback";
import DoctorAbout from "./DoctorAbout";
import SidePanel from "./SidePanel";
import axios from "axios";

const DoctorDetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/doctors")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const [tab, setTab] = useState("about");
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px] relative right-[11rem]">
          {data.map((item) => (
            <div className="md:col-span-2" key={item.id}>
              <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[18px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                {item.specialization}
              </span>
              <div className="flex items-center gap-5 mt-[1rem]">
                <div>
                  <figure className="max-w-[200px] max-h-[200px]">
                    <img className="w-full" src={item.photo} />
                  </figure>
                </div>
                <div>
                  <h3 className="text-[14px] leading-[30px] lg:text-[16px] lg:leading-9 text-headingColor font-700 mt-3">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-[6px] ">
                    <span>
                      <img src={starIcon} />
                    </span>
                    4.8
                    <span>(272)</span>
                  </div>

                  <p className="text-[14px] leading-5 md:text-[15px] lg:max-w-[390px] text-[grey] mt-[1rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                <button
                  className={`${
                    tab === "about" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                  onClick={() => setTab("about")}
                >
                  About
                </button>
                <button
                  className={`${
                    tab === "feedback" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                  onClick={() => setTab("feedback")}
                >
                  Feedback
                </button>
              </div>
              <div className="mt-[50px]">
                {tab === "about" && <DoctorAbout />}
                {tab === "feedback" && <Feedback />}
              </div>
            </div>
          ))}
          <div>
            <SidePanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
