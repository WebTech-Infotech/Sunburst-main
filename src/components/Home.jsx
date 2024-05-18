import React from "react";
import backgroundImage from "../assets/background.png";

const App = () => {
  return (
    <div className="relative min-h-screen">
      <img
        src={backgroundImage}
        alt="Background"
        className="object-cover w-full h-full absolute"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white">
        <h1 className="text-4xl font-bold mb-4">
          INNOVATIVE IT SOLUTIONS, POWERED BY EXPERTISE
        </h1>
        <p className="text-lg mb-8">
          We're Sunburst Infotech Consultancy, a leading IT consulting and
          servicing company, providing cutting-edge solutions to drive your
          business forward.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600  text-white font-bold py-2 px-4 rounded">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default App;
