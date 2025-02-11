import React from "react";
import Img1 from "../../assets/women/saree4.jpg";
import Img2 from "../../assets/women/saree8.jpg";
import Img3 from "../../assets/women/saree9.jpg";
import Img4 from "../../assets/women/saree10.jpg";
import Img5 from "../../assets/women/saree1.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic silk",
    rating: 5.7,
    color: "Gray",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western Saree",
    rating: 4.5,
    color: "Marun Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Nylon Wear Saree",
    rating: 4.7,
    color: "Creemy Brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed Silk Paithanii",
    rating: 4.4,
    color: "Dark Pink",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Cotton Wear Silk",
    rating: 4.5,
    color: "Pink-Golden",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Top Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          Customers are more likely to purchase when the image accurately represents the product. It’s important to follow the saree style guide and upload images that match the product title. Titles should be brief, clear, and descriptive
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
