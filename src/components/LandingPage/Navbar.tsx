import React from "react";
import { useNavigate } from "react-router-dom";
import nnUrl from "../../assets/NN.png";
import { GrGlobe } from "react-icons/gr";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center">
      <div className="flex flex-row items-center">
        <div>
          <img src={nnUrl} className="mr-4 w-44"></img>
        </div>
        <p className="text-[#797B82]">|</p>
        <div className="flex space-x-12 p-2 text-white mx-4">
          <a
            href="#home"
            className="font-SourceSans bg-[#50535C] text-white px-2 rounded-full"
          >
            Home
          </a>
          <a href="#about" className="hover:text-gray-400 font-SourceSans">
            About
          </a>
          <a href="#features" className="hover:text-gray-400 font-SourceSans">
            Features
          </a>
          <a href="#pricing" className="hover:text-gray-400 font-SourceSans">
            Pricing
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center">
      <GrGlobe color="white" className="mx-4"/>
        <button
          onClick={() => navigate("/signup")}
          className="bg-[#50535C] hover:bg-black border-white border text-white py-2 px-6 rounded-3xl block mx-auto"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
