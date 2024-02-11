import React from "react";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
  const [rating, setRaing] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const handleSubmitReview =(e)=>{
    e.preventDefault();
  }
  return (
    <form
      action="
    "
     >
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 mb-4 font-semibold">
          How would you rate the overall experience?
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setRaing(index)}
                onMouseEnter={() => setHover(index)}
                onDoubleClick={() => {
                  setHover(0);
                  setRaing(0);
                }}
                onMouseLeave={() => setHover(rating)}
                className={`${
                  index <= ((rating && hover) || hover)
                    ? "text-yellowColor"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          Share your feedback or suggestions
        </h3>
        <textarea
          className="border border-solid border-[#0066ff34] focus:outline out outline-primaryColor w-full px-4 py-3 rounded-md"
          rows="5"
          placeholder="Write your review"
          value={reviewText}
          onChange={() => setReviewText}
        ></textarea>
        <div className="flex justify-center items-center">
        <button className="btn btn bg-[blue] px-4 py-3 text-[#fff]  text-[16px] rounded-3xl mt-4" onClick={handleSubmitReview}>
          Submit Feedback
        </button>
        </div>
       
      </div>
    </form>
  );
};

export default FeedbackForm;
