import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputField = ({ type, placeholder, onChange }) => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="relative w-full">
      <input
        type={isPasswordVisible && type === "password" ? "text" : type}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900"
      />
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-3 flex items-center text-gray-500"
        >
          {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
        </button>
      )}
    </div>
  );
};

export default InputField;
