import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import NavBar from "../../components/navbar/Navbar";

const ContactPage = () => {
  return (
    <>
      <NavBar />
      <section
        className="bg-cover bg-center min-h-screen flex justify-center items-center bg-black bg-opacity-80"
        style={{
          backgroundImage:
            "url('https://static2.bigstockphoto.com/2/5/6/large1500/65296624.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-80 py-16 px-4 w-full max-w-3xl rounded-2xl p-3">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Contact with Us</h2>
            <p className="text-white">Stay Connected</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-white relative right-[-1rem]">
              <div className="flex items-center mb-6">
                <div className=" bg-white rounded-full w-12 h-12 flex items-center justify-center">
                  <IoHomeOutline className="text-headingColor h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg">Address</h4>
                  <p>Karigaribhaban,action area III</p>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                  <CiPhone className="text-headingColor h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg">Phone Number</h4>
                  <p>9834567764</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                  <CiMail className="text-headingColor h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg">Email</h4>
                  <a href="mailto:knjsagnik6@gmail.com" className="text-white">
                    knjsagnik6@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 bg-opacity-80 rounded-lg py-8 px-10 relative left-[-2rem]">
              <form id="contact-form">
                <h2 className="text-2xl font-bold text-gray-300 mb-6">
                  Send your Message
                </h2>
                <div className="mb-4">
                  <input
                    type="text"
                    required
                    name="fullname"
                    className="w-full px-3 py-2 bg-transparent border-b-2 border-gray-300 focus:border-pink-500 text-white"
                    placeholder="Full Name"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    required
                    name="email"
                    className="w-full px-3 py-2 bg-transparent border-b-2 border-gray-300 focus:border-pink-500 text-white"
                    placeholder="Email"
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    required
                    name="message"
                    className="w-full px-3 py-2 bg-transparent border-b-2 border-gray-300 focus:border-pink-500 text-white"
                    placeholder="Type your Message..."
                  ></textarea>
                </div>

                <div className="flex flex-row">
                  <input
                    type="submit"
                    value="Send"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-sky-800 hover:text-white transition duration-300"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
