import React from "react";
import avatarImg from "../../assets/images/avatar-icon.png";
import { formateDate } from "../../utils/formateDate";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import FeedbackForm from "./FeedbackForm";

const Feedback = () => {
    const [showFeedbackForm, setShowFeedbackForm] = useState(true);
  return (
    <div>
      <div>
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px] ">
          All reviews (272)
        </h4>
        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img src={avatarImg} className="w-full" />
            </figure>
            <div>
              <h5 className="text-[16px] leading-6 text-textColor">
                Ali Ahmed
              </h5>
              <p>{formateDate("02-14-2023")}</p>
              <p className="text__para mt-3 font-medium text-[15px]">
                Good services , highly recommended 👍
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067ff" />
            ))}
          </div>
        </div>
      </div>
      { !showFeedbackForm && <div className="text-center">
        <button className="btn bg-[blue] px-4 py-3 text-[#fff]  text-[16px] rounded-3xl">Give Feedback</button>
      </div>}
      {showFeedbackForm && <FeedbackForm/>}
    </div>
  );
};

export default Feedback;
