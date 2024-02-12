import { useEffect,useState } from "react";
import axios from "axios";
import DoctorCard from '../../pages/Doctor/DoctorCard'


function DoctorList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/doctors").then((response) => {
      setData(response.data);
    }).catch((error)=>{
      console.log(error);
    });
  },[setData]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] m-[30px] lg:mt-[55px]">
      {data.map((doctor, index) => (
        <DoctorCard key ={index} doctor ={doctor} />
      ))}
    </div>
  );
}
export default DoctorList;
