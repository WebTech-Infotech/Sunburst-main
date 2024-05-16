import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "I've collaborated with Wap Infotech for my social media marketing, and it's been a game-changer for my brand. Their strategic approach and creative ideas have significantly increased my followers and engagement. I'm thrilled with the results!",
      name: "Anjali Singh",
      title: "Social Media Influencer",
      avatar:
        "https://www.wapinfotech.com/static/media/testimonial-1.0b4ba887f5f00922c17a.png",
    },
    {
      quote:
        "The web development services provided by Wap-Infotech have exceeded our expectations. They created a user-friendly and visually appealing website that has enhanced our online presence and customer experience. I can't recommend them enough.",
      name: "Rahul Kumar",
      title: "Developer",
      avatar:
        "https://www.wapinfotech.com/static/media/testimonial-1.0b4ba887f5f00922c17a.png",
    },
    {
      quote:
        "The content writing services from Wap-Infotech have been a tremendous asset to our business. Their engaging content has not only attracted more customers but has also improved our search engine rankings. It's been a pleasure working with them.",
      name: "Deepak Sharma",
      title: "Content Writer",
      avatar:
        "https://www.wapinfotech.com/static/media/testimonial-1.0b4ba887f5f00922c17a.png",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl text-center mb-10 font-bold text-gray-800">
          <span className="text-indigo-600">What Our </span>
          <span className="text-gray-800">Client Says</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <blockquote>
                <p className="text-gray-700 mb-4">{testimonial.quote}</p>
              </blockquote>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
