import React from "react";
import date from "date-and-time";
import addFriend from "../assets/addFriend.png";
import FriendsGroup from "./FriendsGroup";
import { GoPlus } from "react-icons/go";
import { GiSettingsKnobs } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

import ordinal from "date-and-time/plugin/ordinal";
import { Navigate } from "react-router-dom";
date.plugin(ordinal);

interface DashHeaderProps {
  isExpanded: boolean;
}

const friends = [
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
  "https://randomuser.me/api/portraits/women/3.jpg",
  "https://randomuser.me/api/portraits/men/4.jpg",
  "https://randomuser.me/api/portraits/women/5.jpg",
];

const Banner1: React.FC<DashHeaderProps> = ({ isExpanded }) => {
  const now = new Date();
  
  const navigate = useNavigate();
  return (
    <div className="flex mb-3 bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-md font-ABeeZee font-thin">
      {/* Current Date Section */}
      <div className="flex flex-col w-1/4 px-8 my-5 border-r drop-shadow-xl border-gray-800">
        <p className=" text-2xl font-semibold">{date.format(now, "MMMM")}</p>
        <p className="text-[10px] text-[#616267]">
          today is {date.format(now, "dddd, MMM DDD YYYY")}
        </p>
      </div>

      {/* Friends Section */}
      <div className="flex w-1/2 justify-between items-center border-gray-800 px-4">
        <div className="flex-1 flex flex-row items-center justify-between mx-2">
          <p
            className="text-2xl font-semibold"
            style={{ textShadow: "3px 3px rgba(0, 0, 0, 0.1)" }}
          >
            Friends
          </p>
          <div className="size-12 flex items-center justify-center">
            <div className="size-10 hover:size-12 rounded-full bg-white transition-all duration-150">
              <img src={addFriend} alt="" className="p-2" />
            </div>
          </div>
        </div>
        <FriendsGroup friends={friends} />
      </div>

      {/* Third Section */}
      <div
        className={`flex w-1/4 flex-row gap-x-4 justify-center items-center my-5 border-gray-800 border-l`}
      >
        <div onClick={ () => navigate('/capsulepage')} className=" text-sm cursor-pointer flex-row flex items-center  bg-[#626267] text-center py-2 px-3 text-white rounded-lg">
          <GoPlus className="size-6" /> Create New
        </div>
        <div className=" text-sm flex-row cursor-pointer flex items-center  bg-[#626267] text-center p-2 text-white rounded-lg">
          <GiSettingsKnobs className="size-6" />
        </div>
      </div>
    </div>
  );
};

export default Banner1;
