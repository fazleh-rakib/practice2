import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const Pricing = () => {
  const pricingOption = [
    {
      id: 1,
      name: "Free",
      price: 0,
      features: [
        "Everything Premium",
        "First Choice",
        "wow features",
        "nice features",
        "joss features",
      ],
    },
    {
      id: 2,
      name: "Diamond",
      price: 20,
      features: [
        "Everything Premium",
        "First Choice",
        "wow features",
        "nice features",
        "joss features",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 30,
      features: [
        "Everything Premium",
        "First Choice",
        "wow features",
        "nice features",
        "joss features",
      ],
    },
  ];
  return (
    <div>
      <h2 className="text-5xl font-semibold bg-indigo-400 m-3 p-6 rounded-md ">
        This is pricing
      </h2>
      <div className="md:flex  justify-center">
        {pricingOption.map((option) => (
          <PriceOption key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
