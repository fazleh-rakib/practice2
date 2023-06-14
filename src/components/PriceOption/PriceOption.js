import React from "react";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { features } = option;
  return (
    <div className="bg-indigo-400 m-3 p-6 rounded-md">
      <div>
        <p>{option.name}</p>
        <span className="font-bold text-5xl">{option.price}</span>
        <span className="text-2xl">/mon</span>
      </div>
      {features.map((feature, idx) => (
        <Feature key={idx} feature={feature} />
      ))}
    </div>
  );
};

export default PriceOption;
