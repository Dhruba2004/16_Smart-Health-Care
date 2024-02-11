import React from "react";
import DoctorList from "./DoctorList";
import Layout from "../../components/layout/Layout";

const Doctor = () => {
  return (
    <Layout>
      <section className="h-[1200px]">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="mt-[2rem] text-[37px] font-bold text-headingColor ">Our trusted doctors</h2>
          <p className="text-textColor max-w-[90%]">
            World-class care for everyone.Our health system offers unmatched
            ,expert health care
          </p>
        </div>
        
        <DoctorList/>
      </section>
    </Layout>
  );
};

export default Doctor;
