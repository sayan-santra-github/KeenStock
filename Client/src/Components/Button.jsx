import React from "react";

const Button = ({
  children,
  type = "button",
  bgcolor = "bg-black",
  textColor= "text-white",
  className = "",
  ...props
}) => {
  return (
    <button type={type} className={`px-4 py-2 rounded-lg ${className} ${bgcolor} ${textColor}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
