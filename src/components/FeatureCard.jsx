import React from "react";

const FeatureCard = (props) => {
  return (
    <div className="  bg-white border border-[#f2e8dc] shadow-sm rounded-2xl p-6 w-[280px] text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#ff5e5b]">
      <div className="flex justify-center mb-3">
        <div className="bg-[#e8d8f3] p-3 rounded-xl">{props.icon}</div>
      </div>
      <h3 className="font-poppins font-semibold text-lg text-gray-800">
        {props.title}
      </h3>
      <p className="text-gray-500 text-sm mt-1">{props.description}</p>
    </div>
  );
};

export default FeatureCard;
