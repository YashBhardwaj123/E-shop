import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Rutika Pandey",
    text: "Shree Keshavam Textiles may not yet be a global saree hub, but it's steadily becoming a key destination. Customer testimonials, in any format, should follow essential guidelines to ensure they resonate authentically with your audience",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Kaamini Roy",
    text: "At Shree Keshavam Textiles, we offer a range of high-quality sarees suitable for daily home use. Customer testimonials can come in many forms, but following common guidelines ensures they feel genuine and connect well with your audience",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Janahvi Singh",
    text: "Shree Keshavam Textiles stands out in the saree industry, offering the best in quality and design. Customer testimonials can take various forms, but following key guidelines ensures they are authentic and resonate with your audience",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Kavita.D",
    text: "This shop offers high-quality products, crafted to meet your needs. Customer testimonials, in any format, should follow key guidelines to ensure authenticity and connect with your audience",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          These are our few customer testimonials, building trust in our collection. 
          
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
