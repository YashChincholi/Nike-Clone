import React from "react";

const Button = ({ label, iconURL, bgColor, borderColor, textColor,fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center rounded-full border ${bgColor} px-7 py-4 gap-2 font-montserrat text-lg leading-none ${textColor} ${borderColor} ${fullWidth && "w-full"}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
