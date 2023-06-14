import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const Pricing = () => {
  const pricingOption = [
    {
      id: 1,
      name: "Free",
      price: 0,
      features: ["wow features", "nice features", "joss features"],
    },
    {
      id: 2,
      name: "Diamond",
      price: 20,
      features: ["wow features", "nice features", "joss features"],
    },
    {
      id: 3,
      name: "Premium",
      price: 30,
      features: ["wow features", "nice features", "joss features"],
    },
  ];
  return (
    <div>
      <h2 className="text-5xl font-bold bg-indigo-400 m-3 p-3 ">
        This is pricing
      </h2>
      <div className="grid grid-cols-3 gap-3 ">
        {pricingOption.map((option) => (
          <PriceOption key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
