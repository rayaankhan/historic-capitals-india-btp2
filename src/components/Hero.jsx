import React from "react";
import BgImage from "../assets/bgImage.jpg";
import Navbar from "./Navbar";
import { FaArrowRight } from "react-icons/fa";
import Map from "./Map";
import Footer from "./Footer";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  return (
    <main style={bgImage} className="overflow-hidden">
      <section className="relative min-h-[100vh] lg:min-h-[100vh] w-full overflow-hidden flex flex-col justify-center">
        {/* Navbar */}
        <div className="z-20">

        <Navbar />
        </div>

        {/* Map Content */}
        <div className="mt-24 h-[70vh] z-0">
          <Map />
        </div>
      {/* footer content */}
      <div className="z-20">

        <Footer/>
      </div>
      </section>
    </main>
  );
};

export default Hero;
