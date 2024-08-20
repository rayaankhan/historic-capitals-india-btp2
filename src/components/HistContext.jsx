import React from "react";
import BgImage2 from "../assets/bgImage.jpg";
import { FaArrowRight } from "react-icons/fa";
const bgImage2 = {
  backgroundImage: `url(${BgImage2})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const HistContext = () => {
  return (
    <div style={bgImage2} className="overflow-hidden">
      <section className="relative min-h-[100vh] min-w-[100vw]">
        <div className="flex flex-col items-center text-black text-center mt-12 px-4 lg:pl-5 ">
          <h1 className="text-3xl lg:text-7xl font-bold my-4 font-serif justify-start">Historical Context:</h1>
          <div className="flex space-x-8 w-100vw">
            <h1 className="text-2xl md:text-4xl font-serif font-semibold"> Location:</h1>
            <h1 className="text-2xl md:text-4xl font-serif font-semibold"> Era:</h1>
          </div>
          <div className="w-[90vw] md:w-[80vw] h-[70vh] bg-white/50 rounded-md"></div>
        </div>
      </section>
    </div>
  );
};

export default HistContext;
