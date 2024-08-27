import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import bgImage from "../assets/bgp.jpg";
import SideNavbar from "../components/SideNavbar";
import DashHeader from "../components/DashHeader";
import Banner1 from "../components/DashBanner1";
import Banner2 from "../components/DashBanner2";

interface UserDoc {
  uid: string;
  name: string;
  email: string;
  storageLeft: number;
  createdAt: Date;
  // Add other fields as necessary
}

const Dashboard: React.FC = () => {
  const location = useLocation();
  const userDoc = location.state?.userDoc as UserDoc | undefined;

  if (!userDoc) {
    return <div>No user data found.</div>;
  }

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = ( e: boolean) => {
    setIsExpanded(e);
  };

  return (
    <div
      className="h-screen bg-cover bg-center fixed inset-0 flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`bg-black bg-opacity-80 w-11/12 transition-all duration-300 ease-in-out
           md:${isExpanded? "w-[calc(80% + 44rem)]": "w-4/5" }  h-[90%] rounded-[40px] flex overflow-hidden relative`}
      >
        {/* Side Navbar */}
        <SideNavbar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <div className={`flex-1 flex flex-col ${
          isExpanded
            ? "left-64 "
            : "left-20"
        }`}
        >
          <DashHeader isExpanded={isExpanded} />
          <main className="flex-1 m-3">
            <Banner1 isExpanded={isExpanded}></Banner1>
            <Banner2 ></Banner2>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
