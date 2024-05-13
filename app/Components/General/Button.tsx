import React from "react";

const Button = ({styles}:{styles:string}) => {
  return (
    <button className={`bg-primary hover:text-primary hover:bg-white hover:drop-shadow-lg text-white px-6 py-2 rounded-full shadow-sm mt-6 ${styles} `}>
      Book Now
    </button>
  );
};

export default Button;
