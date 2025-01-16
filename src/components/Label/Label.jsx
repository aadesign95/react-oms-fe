import React from "react";

const Label = ({ htmlFor, text, required }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-700"
    >
      {text}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};

export default Label;
