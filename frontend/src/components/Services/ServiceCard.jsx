import React from "react";

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;
  return (
    <div className="py-[50px] px-3 lg:px-5 bg-slate-100 rounded-[20px]">
      <h2 className="text-[26px] leading -9 font-[700] text-headingColor">{name}</h2>
      <p className="text-[16px] leading-7font-[400] text-textColor mt-4">{desc}</p>
    </div>
  );
};

export default ServiceCard;
