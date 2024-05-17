import React from "react";

const TeamCard = ({ icon, title, description }) => (
  <div className="w-[450px] bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 ">
    <div className="w-[300px] h-[300px] mb-8">{icon}</div>
    <h3 className="text-3xl font-semibold mb-4">{title}</h3>
    <p className="text-center transition-colors duration-300">{description}</p>
  </div>
);

const Teams = () => {
  const team = [
    {
      icon: (
        <img
          src="https://i.ibb.co/vC5Xkpw/Subhradeep.png"
          alt="Subhradeep"
          className="w-full h-full object-fit rounded-xl"
        />
      ),
      title: "Subhradeep Samanta",
      description:
        "Subhradeep is a skilled web developer who excels in creating websites that not only look stunning but also effectively engage users and drive conversions. With a focus on user experience and a knack for incorporating the latest design trends, he ensures that every website he designs not only meets but exceeds client expectations.",
    },
    {
      icon: (
        <img
          src="https://i.ibb.co/ZSDfYTr/Screenshot-2023-11-03-204711.png"
          alt="Sukanya"
          className="w-full h-full object-fit rounded-xl"
        />
      ),
      title: "Cutiee Mondal",
      description:
        "With a keen eye for design and a passion for creativity, Sukanya brings brands to life through his expertise in crafting visually striking and memorable brand identities. She understands the importance of connecting with the audience on a deeper level and strives to create designs that leave a lasting impression",
    },
  ];
  return (
    <div className="bg-[#F1C232] py-12">
      <div className="container mx-auto px-4 py-5">
        <h1 className="text-6xl text-center mb-20 font-bold text-gray-800">
          <span className="text-gray-800">OUR </span>
          <span className="text-gray-800">TEAM</span>
        </h1>
        <div className="flex justify-evenly w-full">
          {team.map((service, index) => (
            <TeamCard
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

export default Teams;
