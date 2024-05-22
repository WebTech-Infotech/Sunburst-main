import React, { useEffect, useRef, useState } from "react";

const Testimonial = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const containerRef = useRef(null);

  const testimonials = [
    {
      quote:
        "I've collaborated with Sunburst Infotech Consultancy for my social media marketing, and it's been a game-changer for my brand. Their strategic approach and creative ideas have significantly increased my followers and engagement. I'm thrilled with the results!",
      name: "Anjali Singh",
      title: "Social Media Influencer",
      avatar:
        "https://www.wapinfotech.com/static/media/testimonial-1.0b4ba887f5f00922c17a.png",
    },
    {
      quote:
        "The web development services provided by Sunburst Infotech Consultancy have exceeded our expectations. They created a user-friendly and visually appealing website that has enhanced our online presence and customer experience. I can't recommend them enough.",
      name: "Rahul Kumar",
      title: "Developer",
      avatar:
        "https://www.wapinfotech.com/static/media/testimonial-1.0b4ba887f5f00922c17a.png",
    },
    {
      quote:
        "The content writing services from Sunburst Infotech Consultancy have been a tremendous asset to our business. Their engaging content has not only attracted more customers but has also improved our search engine rankings. It's been a pleasure working with them.",
      name: "Deepak Sharma",
      title: "Content Writer",
      avatar:
        "https://www.wapinfotech.com/static/media/testimonial-1.0b4ba887f5f00922c17a.png",
    },
    {
      quote:
        "I've collaborated with Sunburst Infotech Consultancy for my social media marketing, and it's been a game-changer for my brand. Their strategic approach and creative ideas have significantly increased my followers and engagement. I'm thrilled with the results!",
      name: "Anjali Singh",
      title: "Social Media Influencer",
      avatar:
        "https://www.wapinfotech.com/static/media/testimonial-1.0b4ba887f5f00922c17a.png",
    },
    {
      quote:
        "The web development services provided by Sunburst Infotech Consultancy have exceeded our expectations. They created a user-friendly and visually appealing website that has enhanced our online presence and customer experience. I can't recommend them enough.",
      name: "Rahul Kumar",
      title: "Developer",
      avatar:
        "https://www.wapinfotech.com/static/media/testimonial-1.0b4ba887f5f00922c17a.png",
    },
    {
      quote:
        "The content writing services from Sunburst Infotech Consultancy have been a tremendous asset to our business. Their engaging content has not only attracted more customers but has also improved our search engine rankings. It's been a pleasure working with them.",
      name: "Deepak Sharma",
      title: "Content Writer",
      avatar:
        "https://www.wapinfotech.com/static/media/testimonial-1.0b4ba887f5f00922c17a.png",
    },
    {
      quote:
        "I've collaborated with Sunburst Infotech Consultancy for my social media marketing, and it's been a game-changer for my brand. Their strategic approach and creative ideas have significantly increased my followers and engagement. I'm thrilled with the results!",
      name: "Anjali Singh",
      title: "Social Media Influencer",
      avatar:
        "https://www.wapinfotech.com/static/media/testimonial-1.0b4ba887f5f00922c17a.png",
    },
    {
      quote:
        "The web development services provided by Sunburst Infotech Consultancy have exceeded our expectations. They created a user-friendly and visually appealing website that has enhanced our online presence and customer experience. I can't recommend them enough.",
      name: "Rahul Kumar",
      title: "Developer",
      avatar:
        "https://www.wapinfotech.com/static/media/testimonial-1.0b4ba887f5f00922c17a.png",
    },
    {
      quote:
        "The content writing services from Sunburst Infotech Consultancy have been a tremendous asset to our business. Their engaging content has not only attracted more customers but has also improved our search engine rankings. It's been a pleasure working with them.",
      name: "Deepak Sharma",
      title: "Content Writer",
      avatar:
        "https://www.wapinfotech.com/static/media/testimonial-1.0b4ba887f5f00922c17a.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="bg-indigo-600 py-16" id="testimonial">
      <div className="container mx-auto px-4 mt-20">
        <h1 className="text-4xl md:text-6xl text-center mb-10 font-bold text-gray-800">
          <span className="text-white">What Our </span>
          <span className="text-white">Client Says</span>
        </h1>
        <div
          className="relative overflow-hidden rounded-lg md:rounded-xl"
          ref={containerRef}
        >
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${
                (testimonialIndex / testimonials.length) * 100
              }%)`,
            }}
          >
            {[...testimonials, ...testimonials, ...testimonials].map(
              (testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/3 bg-white p-4 md:p-6 mx-2 md:mx-6 rounded-lg md:rounded-xl"
                >
                  <blockquote>
                    <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                  </blockquote>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-base md:text-lg font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
