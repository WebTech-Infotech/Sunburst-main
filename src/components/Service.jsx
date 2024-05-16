import React from "react";
import brand from "../assets/brand-strategy.svg";
import content from "../assets/content-marketing.svg";
import design from "../assets/design-service.svg";
import digital from "../assets/digital-marketing.svg";
import video from "../assets/video-production.svg";
import web from "../assets/web-design.svg";

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:bg-indigo-600 hover:text-white">
    <div className="w-48 h-48 mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-center transition-colors duration-300 hover:text-white">
      {description}
    </p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: (
        <img
          src={brand}
          alt="Brand Strategy"
          className="w-full h-full object-fit"
        />
      ),
      title: "Brand Strategy",
      description:
        "Crafting unique brand identities that resonate with your target audience.",
    },
    {
      icon: (
        <img src={web} alt="Web Design" className="w-full h-full object-fit" />
      ),
      title: "Web Design",
      description:
        "Creating visually appealing and user-friendly websites that drive conversions.",
    },
    {
      icon: (
        <img
          src={content}
          alt="Content Marketing"
          className="w-full h-full object-fit"
        />
      ),
      title: "Content Marketing",
      description:
        "Crafting compelling content that engages your audience and boosts brand awareness.",
    },
    {
      icon: (
        <img
          src={digital}
          alt="Digital Marketing"
          className="w-full h-full object-fit"
        />
      ),
      title: "Digital Marketing",
      description:
        "Leveraging digital channels to drive targeted traffic and increase conversions.",
    },
    {
      icon: (
        <img
          src={design}
          alt="Design Service"
          className="w-full h-full object-fit "
        />
      ),
      title: "Design Service",
      description:
        "Creating captivating visual designs that elevate your brand and engage your audience.",
    },
    {
      icon: (
        <img
          src={video}
          alt="Video Production"
          className="w-full h-full object-fit"
        />
      ),
      title: "Video Production",
      description:
        "Producing high-quality videos that showcase your brand and products.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 py-5">
        <h1 className="text-6xl text-center mb-4 font-bold text-gray-800">
          <span className="text-indigo-600">Our </span>
          <span className="text-gray-800">Services</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
