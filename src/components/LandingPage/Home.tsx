import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import catUrl from "../../assets/cat.jpg";
import swingUrl from "../../assets/swing.jpg";
import hallUrl from "../../assets/hall.jpg";
import flowerUrl from "../../assets/flower.jpg";

import { FaDiscord, FaInstagram } from "react-icons/fa";

const images = [catUrl, swingUrl, hallUrl, flowerUrl];

const Home: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-between py-8 ">
      <div className="col-span-1 grid grid-flow-row grid-rows-[7fr_2fr_2fr] pl-4">
        <div className="grid-row-1 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-white text-center font-Khyay p-3">
            For you, <br></br>
            Years from now
          </h1>
          <p className="text-white text-center text-sm font-ABeeZee font-thin p-4">
            Preserve your cherished images and videos with NostalgiaNet. Our
            website allows you to securely store memories, unlocking them at
            special moments in the future to relive and cherish forever.
          </p>
          <button onClick={() => navigate('/signup')} className="bg-[#50535C] hover:bg-black text-white border border-white my-3 py-2 px-6 rounded-3xl block mx-auto">
            Get Started
          </button>
        </div>

        <div className="flex flex-row">
          {images.map((imgUrl, index) => (
            <div
              key={index}
              className="p-4 bg-white cursor-pointer m-auto shadow-md size-40 rounded-[30%] md:size-16 xl:size-24 2xl:size-28 xl:rounded-2xl"
              onClick={() => setCurrentImage(index)}
              style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          ))}
        </div>

        <div className="grid-row-3 flex space-x-4 mt-auto">
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord className="hover:text-gray-700 bg-white my-2 size-8 p-1 rounded-full" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-gray-700 bg-white my-2 size-8 p-1 rounded-full" />
          </a>
        </div>
      </div>
      {/* Right Part (Slider) */}
      <div className="col-span-1 justify-center items-center">
        <div className="h-4/5 mx-auto w-96 block rounded-lg overflow-hidden justify-center items-center" >
          <img
            src={images[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            className=" object-cover rounded-[48px]"
            style={{maxHeight: 500, minHeight: 500}}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
