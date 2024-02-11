import React from "react";

const SidePanel = () => {
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md mt-4">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          500 BDT
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text__para mt-0">Available Time slots:</p>
        <div className="mt-3">
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor">Sunday</p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">4:00 PM - 9:00 PM</p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor">Monday</p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">12:00 PM - 4:00 PM</p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor">Wednesday</p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">2:00 PM - 4:00 PM</p>
          </li>
          <button>Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
