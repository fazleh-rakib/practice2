import React from "react";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { features } = option;
  return (
    <>
      <div className="w-72 h-fit    bg-indigo-400 m-3 p-6 rounded-md shadow-xl transition duration-200 hover:bg-green-500 hover:scale-110 ">
        <div>
          <p>{option.name}</p>
          <span className="font-bold text-5xl ">{option.price}</span>
          <span className="text-2xl">/mon</span>
        </div>
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature} />
        ))}
        <button className="bg-green-500 hover:bg-white mt-3 w-full rounded-lg  py-2 font-bold text-white ">
          <span className="hover:text-indigo-400">Buy Now</span>
        </button>
      </div>
    </>
  );
};

export default PriceOption;
