import React from "react";
import Image1 from "../../assets/hero/saree11.jpg";
import Image2 from "../../assets/hero/saree16.jpg";
import Image3 from "../../assets/hero/saree15.jpg";
import Image4 from "../../assets/hero/saree18.jpg";
import Image5 from "../../assets/hero/saree17.jpg";
import Image6 from "../../assets/hero/saree19.jpg";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Explore our exclusive Designer Saree collection!",
    description:
      "Shop a wide range of Designer Sarees in various qualities at discounted prices, only at Shree Keshavam Textiles!",
  },
  {
    id: 2,
    img: Image2,
    title: "Discover the finest Silk Pattern Sarees collection!",
    description:
      "Silk Sarees at Shree Keshavam Textiles offer unmatched quality, smooth texture, and exquisite design, perfect for any occasion.",
  },
  {
    id: 3,
    img: Image3,
    title: "Explore our elegant Wedding Ceremony Sarees.",
    description:
      "Sarees are a popular choice in the market, helping women create their own unique shine and express their personality with elegance, exclusively at Shree Keshavam Textiles.",
  },
  {
    id: 4,
    img: Image4,
    title: "Top brand Sarees at budget-friendly prices.",
    description:
       "Our Saree brands offer excellent quality and design, with a focus on fabric health and affordability",
  },
  {
    id: 5,
    img: Image5,
    title: "Explore top-class Wedding Sarees, where quality meets elegance",
    description: 
       "Our Sarees represent top-quality brands, perfect for wedding ceremonies. Showcase elegance with our exclusive collection.",
  },
  {
    id: 6,
    img: Image6,
    title: "Discover exquisite Paithani Pattern Sarees, crafted with elegance",
    description:
      "Silk Sarees at Shree Keshavam Textiles offer exceptional quality, smooth texture, and stunning design, perfect for any occasion",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-[rgb(7,110,111)] absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
