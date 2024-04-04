import React, { useContext, useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AuthContext } from "../../context/AuthContext.jsx";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },

  {
    path: "/about",
    display: "About",
  },

  {
    path: "/doctors",
    display: "Find a doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Navbar = () => {
  const { user, role, token } = useContext(AuthContext);
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container m-4">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} />
          </div>

          <div
            className="navigation relative right-[-5rem]"
            onClick={toggleMenu}
            ref={menuRef}
          >
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor "
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4 relative right-[2rem]">
            {token && user ? (
              <div>
                <Link to={`${role==='doctor'?'/doctors/profile/me':'/users/profile/me'}`}>
                  <figure>
                    <img src={user.data.photo} className="w-9 h-9 rounded-full" />
                  </figure>
                  <h2>{user.data?.name}</h2>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor py-2 px-6 text-white h-[44px] flex items-center font-[600] rounded-xl ">
                  Login
                </button>
              </Link>
            )}

            <h1>{user?.name}</h1>

            <span className="md:hidden cursor-pointer" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
