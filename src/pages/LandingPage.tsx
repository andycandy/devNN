import React from "react";
import FloatingDiv from "../components/LandingPage/FloatingDiv";
import Navbar from "../components/LandingPage/Navbar";
import bgImage from "../assets/bgp.jpg";
import Home from "../components/LandingPage/Home";

const LandingPage: React.FC = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <FloatingDiv>
        <Navbar />
        <Home />
      </FloatingDiv>
    </div>
  );
};

export default LandingPage;
