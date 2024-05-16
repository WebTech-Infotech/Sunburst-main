import React from "react";
import home from "../assets/home.svg";

const About = () => {
  return (
    <div className="w-full h-full bg-gray-100 py-8">
      <h1 className="sm:text-6xl font-bold text-gray-800 text-center">
        <span className="text-indigo-600">About </span>
        <span className="text-gray-800">Us</span>
      </h1>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex w-full">
          <img
            src={home}
            className={`w-full h-[400px] mx-auto transition-opacity duration-500`}
            alt="home"
          />
        </div>
        <div className="p-10 w-full">
          <h1 className="sm:text-2xl font-semibold text-gray-800">
            Are you tired of the same old marketing strategies that just don’t
            seem to be taking your brand where you want it to go? Do you want to
            explore new possibilities and unlock untapped potential for your
            brand? Look no further. Pink Lemonade is your new-age branding and
            digital marketing agency that combines the power of AI and human
            intelligence to provide world-class services. Every brand has unique
            goals and needs — we understand this well. Our AI-powered services
            are specifically designed to amplify your brand, while our team of
            experts provides human insights to ensure your message hits home.
          </h1>
        </div>
      </div>
    </div>
  );
};
export default About;
