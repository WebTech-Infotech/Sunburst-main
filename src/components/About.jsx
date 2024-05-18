import React, { useState, useEffect } from "react";
import about from "../assets/about.svg";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: (
        <>
          <span className="text-black">ABOUT </span>
          <span className="text-black">US</span>
        </>
      ),
      content: (
        <p className="sm:text-xl text-black font-semibold">
          <span className="text-4xl text-black">A</span>re you feeling stuck
          with outdated IT solutions that just aren't propelling your business
          forward? Ready to embrace innovation and uncover fresh opportunities
          for your company? Look no further. Sunburst Infotech Consultancy is
          your cutting-edge IT consulting partner, seamlessly blending AI
          technology with human expertise to deliver exceptional services. We
          recognize that each business has its own distinct objectives and
          requirements — and we excel in catering to them. Our AI-driven
          solutions are meticulously crafted to elevate your company, while our
          team of seasoned professionals provides invaluable insights to ensure
          your IT strategies resonate effectively.
        </p>
      ),
    },
    {
      title: (
        <>
          <span className="text-black">WHY </span>
          <span className="text-black">CHOOSE US</span>
        </>
      ),
      content: (
        <p className="sm:text-xl text-black font-semibold">
          <span className="text-4xl text-black">A</span>t Sunburst Infotech
          Consultancy, we pride ourselves on our unwavering commitment to
          excellence and innovation. Our team of seasoned professionals combines
          extensive industry experience with cutting-edge AI technology,
          ensuring that our solutions are not only effective but also
          future-proof. We understand that every business is unique, which is
          why we take a personalized approach, tailoring our services to meet
          your specific needs and objectives.
        </p>
      ),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-[#F1C232] py-8 w-full h-screen" id="about">
      <div className="flex items-center mb-8 w-full justify-center">
        <h1 className="sm:text-6xl font-bold text-white text-center mt-16 justify-right">
          {slides[currentSlide].title}
        </h1>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex w-full">
          <img
            src={about}
            className="w-full h-[400px] mx-auto transition-opacity duration-500"
            alt="about"
          />
        </div>
        <div className="p-10 w-full">{slides[currentSlide].content}</div>
      </div>
    </div>
  );
};

export default Carousel;
