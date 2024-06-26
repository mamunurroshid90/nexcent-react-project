import React, { useEffect, useState } from "react";

import logo from "../../public/images/logo.png";
import { Link } from "react-scroll";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // set toggle menu
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  // navItems array
  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Testimonial", path: "testimonial" },
    { link: "Product", path: "product" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header className=" w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={` py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className=" flex justify-between items-center text-base gap-8">
          <a
            href=""
            className=" text-2xl font-semibold flex items-center space-x-3"
          >
            <img
              src={logo}
              alt="logo"
              className=" w-10 inline-block items-center"
            />{" "}
            <span className=" text-brandSecondary capitalize">nexcent</span>
          </a>
          {/* <navItem for large devices */}
          <ul className=" md:flex space-x-12 hidden cursor-pointer">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className=" text-base block text-grey900 hover:hover:text-orange-500 first:font-medium "
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* btn for large devices */}
          <div className=" space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className=" hidden lg:flex items-center text-brandPrimary hover:text-grey900"
            >
              Login
            </a>
            <button className=" bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralGrey">
              Sign up
            </button>
          </div>
          {/* menu btn for only mobile devices */}
          <div className=" md:hidden">
            <button
              onClick={toggleMenu}
              className=" text-neutralDGrey focus:outline-none focus:text-gray-500"
            >
              {isOpenMenu ? (
                <RxCross2 className=" h-6 w-6" />
              ) : (
                <FaBars className=" h-6 w-6" />
              )}
            </button>
          </div>
          {/* nav items for mobile devices */}
          <div
            className={`space-y-4 px-4 py-7 mt-16 bg-slate-700 ${
              isOpenMenu ? "block top-0 left-0 right-0 fixed " : "hidden"
            }`}
          >
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className=" text-base block text-white hover:text-orange-500 first:font-medium cursor-pointer"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
