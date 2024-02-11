import React,{useState} from "react";
import doctorImg02 from "../../assets/images/doctor-img02.png";
import starIcon from "../../assets/images/Star.png";
import Feedback from "./Feedback";
import DoctorAbout from './DoctorAbout';
import SidePanel from "./SidePanel";

const DoctorDetails = () => {
  const [tab, setTab] = useState('about')
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px] relative right-[11rem]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5 mt-[1rem]">
              <div>
                <figure className="max-w-[200px] max-h-[200px]">
                <img className="w-full" src={doctorImg02}/>
              </figure>
                </div>
              <div>
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[18px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  Surgeon
                </span>
                <h3 className="text-[14px] leading-[30px] lg:text-[16px] lg:leading-9 text-headingColor font-700 mt-3">
                  Arnab Basu
                </h3>
                <div className="flex items-center gap-[6px] ">
                  <span>
                    <img src={starIcon} />
                  </span>
                  4.8
                  <span>(272)</span>
                  
                </div>
                <p className="text-[14px] leading-5 md:text-[15px] lg:max-w-[390px] text-[grey] mt-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>

            </div>
            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button className={`${tab ==='about' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`} onClick={()=>setTab('about')}>
                About
              </button>
              <button className= {`${tab ==='feedback' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`} onClick={()=>setTab('feedback')}>
                Feedback
              </button>
            </div>
            <div className="mt-[50px]">
              {tab === "about" && <DoctorAbout/> }
              {tab === "feedback" && <Feedback/>}
            </div>
          </div>
          <div><SidePanel/></div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
