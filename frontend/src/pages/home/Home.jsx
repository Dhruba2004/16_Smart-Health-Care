import { Link } from "react-router-dom";
import doctorImg from '../../assets/images/doctor.png';

import Layout from "../../components/layout/Layout";
function Home() {
  return (
    <Layout>
      <div className="flex justify-between mt-8 hero-section h-[900px] hero ">
        <div className="left ml-7 flex justify-center flex-col mb-[22rem] container">
          <h1 className="text-[#3C3C3C] text-[59px] font-[800] text-left">
            Smart Healthcare
          </h1>
          <p className="text-[#949494] text-[19px]">
            We are leveraging cutting-edge technology and dedicated health
            expert to enhance your well-being​
          </p>
          <div className="flex gap-[2rem] mt-[2rem]">
            <Link className="bg-[#187383] px-6 py-4 rounded-2xl text-[#fff] font-[700] text-[16px]">
              Request an Appointment
            </Link>
            <Link className="bg-[#fff] px-6 py-4 rounded-xl text-black font-[700] text-[16px] border border-sky-400">
              See more
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="mr-9 mb-6 mx-auto hero-image">
            <img className="w-[600px] h-[600px]" src={doctorImg} alt="doctor"/>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Home;
