import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Contact from "./Contact";
import Feedback from "./Feedback";
import Logo1 from "../assets/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const isMobile = windowWidth < 1024;
  const bgColor = isMobile || isScrolled ? "bg-white/60" : "bg-transparent";
  const logo = Logo1;
  const textColor = isMobile || isScrolled ? "text-black" : "text-white";

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };
  const toggleFeedback = () => {
    setIsFeedbackOpen(!isFeedbackOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 w-[100vw] transition-colors duration-300 ${bgColor} flex flex-col rounded-b-lg shadow-lg`}
      >
        <div className="container flex items-center justify-between py-2 pl-10 space-x-2 w-[100vw]">
          {/* 1st FlexBox - Logo*/}
          <div className="flex justify-evenly space-x-8  text-md md:text-2xl">
            <a href="#" className="flex justify-center">
              <img src={logo} alt="Logo" className="h-14 w-18 mr-2 rounded-lg" />
              <div className="flex flex-col justify-center">
                <h1 className={`${textColor} leading-tight font-serif font-semibold`}>
                  Historical Capitals
                </h1>
                <h1 className={`${textColor} leading-tight font-serif font-semibold`}>
                  Of India
                </h1>
              </div>
            </a>
          </div>

          {/* 2nd Flexbox - search*/}
          <div className="flex items-center space-x-5 m-0 md:mr-5">
            <div className="flex flex-col">
              <input
                className={`bg-transparent ${textColor} font-serif w-[20vw]`}
                type="text"
                placeholder="Search"
              />
              <div className={`h-0.5 bg-gradient-to-r from-green-500 to-yellow-500`} />
            </div>
            <FontAwesomeIcon
              icon={faSearch}
              className={`mr-4 cursor-pointer ${textColor} hover:text-gray-600`}
              onClick={openSearch}
            />
            {isMobile && (
              <button onClick={toggleSidebar} className={`text-2xl ${textColor}`}>
                <FaBars />
              </button>
            )}
          </div>

          {/* 3rd Flexbox- about,contact and feedback */}
          <div className="hidden lg:flex items-center justify-end space-x-5 font-serif font-semibold text-2xl pr-0">
            <div
              className={`flex items-center ${textColor} relative`}
              onMouseEnter={() => handleMouseEnter("About")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#">About</a>
            </div>
            <div
              className={`flex items-center ${textColor} relative`}
              onMouseEnter={() => handleMouseEnter("Feedback")}
              onMouseLeave={handleMouseLeave}
              onClick={toggleFeedback}
            >
              <a href="#">Feedback</a>
            </div>
            <div
              className={`flex items-center ${textColor} relative mr-5`}
              onMouseEnter={() => handleMouseEnter("Contact")}
              onMouseLeave={handleMouseLeave}
              onClick={toggleContact}
            >
              <a href="#" className="mr-10">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {isContactOpen && <Contact onClose={toggleContact} />}
      {isFeedbackOpen && <Feedback onClose={toggleFeedback} />}


      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}

export default Navbar;
