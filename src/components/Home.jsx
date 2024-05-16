import React, { useState, useEffect } from "react";
import home from "../assets/home.svg";
import home2 from "../assets/home2.svg";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(home);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage === home ? home2 : home));
        setIsTransitioning(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100 py-8">
      <div className="items-center justify-center h-full flex ">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div>
            <h1 className="text-6xl font-bold text-gray-800">
              <span className="text-indigo-600">Web</span>
              <span className="text-gray-800">Tech </span>
              <span className="text-indigo-600">Infotech</span>
            </h1>
            <p className="text-gray-600 mt-2">
              Empowering Innovation, Transforming Technology
            </p>
          </div>
          <div className="relative">
            <img
              src={currentImage}
              className={`w-full h-[400px] mx-auto transition-opacity duration-500 ${
                isTransitioning ? "opacity-0 blur-sm" : "opacity-100"
              }`}
              alt="home"
            />
            <div className="absolute inset-0 rounded-full shadow-lg bg-gradient-to-r from-indigo-500 to-purple-500 opacity-25 transform -translate-x-1 -translate-y-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
