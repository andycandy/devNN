import { useState } from "react";
import bgImage from "../assets/bgp.jpg";
import SideNavbar from "../components/SideNavbar";
import DashHeader from "../components/DashHeader";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaLock } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

const CapsulePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = (e: boolean) => {
    setIsExpanded(e);
  };

  const [index, setIndex] = useState(0);

  const top = index * 7;

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
         md:${
           isExpanded ? "w-[calc(80% + 44rem)]" : "w-4/5"
         } h-[90%] rounded-[40px] flex overflow-hidden relative`}
      >
        {/* Side Navbar */}
        <SideNavbar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <div
          className={`flex-1 flex flex-col ${
            isExpanded ? "left-64" : "left-20"
          }`}
        >
          <DashHeader isExpanded={isExpanded} />
          <main className="flex-1 flex items-center justify-center m-3">
            <div className="w-[95%] lg:w-[90%] h-[80%] lg:h-[90%] rounded-3xl bg-[#D4D4D4] flex flex-row">
              <div className="h-full flex w-3/4 xl:w-1/2 items-center justify-end scale-90 lg:scale-100">
                <div className="w-[85%] lg:w-[65%] bg-[#272625] h-[28rem] lg:mr-[2rem] rounded-[30px] relative items-center">
                  <>
                  <img
                    className="absolute scale-90 lg:scale-100 left-[-66px] transition-all duration-300 ease-in-out"
                    style={{ top: `calc(${top + 2.5}rem` }}
                    src="/mover.svg"
                    alt="Mover Icon"
                  />

                  <FaLock
                    className={`absolute scale-90 lg:scale-100 left-[-14px] transition-all duration-300 ease-in-out size-8 ${
                      index === 1 ? "opacity-100" : "opacity-0"
                    }`}
                    color="white"
                    style={{ top: `${top + 5.75}rem` }}
                  />
                  <RiDeleteBin5Fill
                    className={`absolute scale-90 lg:scale-100 left-[-14px] transition-all duration-300 ease-in-out size-8 ${
                      index === 2 ? "opacity-100" : "opacity-0"
                    }`}
                    color="white"
                    style={{ top: `${top + 5.75}rem` }}
                  />
                  <FaPlus
                    className={`absolute scale-90 lg:scale-100 left-[-14px] transition-all duration-300 ease-in-out size-8 ${
                      index === 0 ? "opacity-100" : "opacity-0"
                    }`}
                    color="white"
                    style={{ top: `${top + 5.75}rem` }}
                  />
</>
                  <div className="relative h-full z-10 flex items-center justify-center text-center ">
                    <ul className="text-center font-ABeeZee text-white font-light text-lg">
                      <li
                        className="my-[5rem] cursor-pointer lg:w-auto text-center"
                        onMouseEnter={() => setIndex(0)}
                      >
                        New TimeVault
                      </li>
                      <li
                        className="my-[5rem] cursor-pointer"
                        onMouseEnter={() => setIndex(1)}
                      >
                        My TimeVaults
                      </li>
                      <li
                        className="my-[5rem] cursor-pointer"
                        onMouseEnter={() => setIndex(2)}
                      >
                        Delete TimeVault
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-1/2"></div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CapsulePage;
