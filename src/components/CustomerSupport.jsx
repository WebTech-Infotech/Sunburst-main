import React from "react";

const CustomerSupport = () => {
  return (
    <div className="flex sm:flex-row flex-col w-full bg-white sm:h-[100px] sm:justify-evenly justify-between items-center gap-y-5  sm:mb-0 mb-10 h-[550px] sm:gap-0 mt-10">
      <div className="w-[300px] h-[200px] bg-white shadow-4xl rounded-lg px-4 flex flex-col justify-center gap-y-4 border-black border-2">
        <h1 className="text-xl font-semibold text-center">
          100% Customer Support
        </h1>
        <p className="text-center">
          Our team will be by your side every step of the way, giving you our
          200% support.
        </p>
      </div>
      <div className="w-[300px] h-[200px] bg-white shadow-4xl rounded-lg px-4 flex flex-col justify-center gap-y-4 border-black border-2">
        <h1 className="text-xl font-semibold text-center">
          1000+ Easy Integrations
        </h1>
        <p className="text-center">
          Integrations will never be a hassle for you, we’ve got you covered.
        </p>
      </div>
      <div className="w-[300px] h-[200px] bg-white shadow-4xl rounded-lg px-4 flex flex-col justify-center gap-y-4 border-black border-2">
        <h1 className="text-xl font-semibold text-center">30,000+ Users</h1>
        <p className="text-center">
          Users across multiple industries increased their conversions by up to
          72% using Sunburst Infotech.
        </p>
      </div>
    </div>
  );
};

export default CustomerSupport;
