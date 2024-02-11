import React from "react";
import { formateDate } from "../../utils/formateDate";

const DoctorAbout = () => {
  return (
    <div className="m-4 p-4">
      <div className="">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About Of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Arnab Basu
          </span>
        </h3>
        <p className="text__para w-[100%] text-[grey]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
          nesciunt voluptatum, natus quod deserunt earum fugit, maiores
          repellendus voluptatem hic blanditiis repellat quo maxime doloribus a
          temporibus in repudiandae cupiditate vel. Doloribus ea ullam harum
          soluta dolore quae modi id natus, ratione cum possimus ipsum explicabo
          adipisci quisquam dolorem porro.
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <div className="flex gap-[23rem]">
                <div>
                  <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                    {formateDate("09-12-2014")} - {formateDate("09-12-2016")}
                  </span>
                  <p className="text-[16px] leading-6 font-medium text-textColor ">
                    PHD in Surgeon
                  </p>
                </div>
              </div>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                New Apollo Hospital , New York
              </p>
            </div>
          </li>
          <li className="flex sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <div className="flex gap-[23rem]">
                <div>
                  <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                    {formateDate("12-04-2010")} - {formateDate("09-04-2014")}
                  </span>
                  <p className="text-[16px] leading-6 font-medium text-textColor ">
                    PHD in Surgeon
                  </p>
                </div>
              </div>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                New Apollo Hospital , New York
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-12 ml-4">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>
        <ul className="grid gap-[30px] pt-4 md:pt-5 grid-cols-1">
          <div className="flex flex-row gap-[26px]">
            <li className="p-4 rounded-xl bg-[#fff9ea] w-[50%]">
              <span className="text-yellowColor text-[15px] leaing-6 font-semibold">
                {formateDate("12-04-2010")} - {formateDate("12-04-2014")}
              </span>
              <p className="text-[15px] leading-6 font-medium text-textColor ">
                Sr. Surgeon
              </p>
              <p className="text-[15px] leading-6 font-medium text-textColor">
                New Apollo Hospital , New York
              </p>
            </li>
            <li className="p-4 rounded-xl bg-[#fff9ea] w-[50%]">
              <span className="text-yellowColor text-[15px] leaing-6 font-semibold">
                {formateDate("12-04-2014")} - {formateDate("12-04-2016")}
              </span>
              <p className="text-[15px] leading-6 font-medium text-textColor ">
                Sr. Surgeon
              </p>
              <p className="text-[15px] leading-6 font-medium text-textColor">
                New Apollo Hospital , New York
              </p>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
