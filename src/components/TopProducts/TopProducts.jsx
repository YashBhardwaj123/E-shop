import React from "react";
import Img1 from "../../assets/shirt/saree12.jpg";
import Img2 from "../../assets/shirt/saree5.jpg";
import Img3 from "../../assets/shirt/sadi.jpg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Silk Wear",
    description:
      "Discover timeless elegance in our saree collection, where fashion meets comfort, and style enhances your confidence. Elevate your wardrobe with handpicked pieces that redefine your look",
  },
  {
    id: 2,
    img: Img2,
    title: "Yeola Paithanii Saree",
    description:
      "Elevate your everyday look with our premium women's sarees collection. Crafted for the modern woman, our sarees blend sophistication with comfort. Whether it's a special occasion or daily wear, our diverse range ensures you always look and feel your best.",
  },
  {
    id: 3,
    img: Img3,
    title: "Foot Pattern Silk",
    description:
      "Explore our women's silk saree collection, offering versatile styles for any occasion. From classic designs to casual elegance, our range combines comfort and style effortlessly",
  },
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          Discover our premium saree collection, where every piece is designed to combine elegance, comfort, and tradition. Elevate your wardrobe with timeless pieces that reflect your unique style.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
