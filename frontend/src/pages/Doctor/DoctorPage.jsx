import Navbar from "../../components/navbar/Navbar";
import DoctorDetails from "./DoctorDetails";

function DoctorPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col h-[950px] pl-[8rem]">
        <DoctorDetails />
      </div>
    </>
  );
}
export default DoctorPage;
