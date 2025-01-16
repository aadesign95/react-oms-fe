import React from "react";
import {
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid"; // Perub

const Alert = ({ title, description, footer, type, icon }) => {
  const typeStyles = {
    primary: "bg-blue-50 border-blue-500",
    success: "bg-green-50 border-green-500",
    warning: "bg-yellow-50 border-yellow-500",
    danger: "bg-red-50 border-red-500",
    default: "bg-white border-slate-200",
  };

  const renderIcon = () => {
    switch (type) {
      case "primary":
        return <InformationCircleIcon className="w-6 h-6 text-blue-500" />;
      case "success":
        return <CheckCircleIcon className="w-6 h-6 text-green-500" />;
      case "warning":
        return <ExclamationCircleIcon className="w-6 h-6 text-yellow-500" />;
      case "danger":
        return <XCircleIcon className="w-6 h-6 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`border rounded-xl ${typeStyles[type] || typeStyles.default}`}
    >
      <div className="px-4 py-3 border-b flex items-center">
        {icon && <div className="mr-2">{renderIcon()}</div>}
        <h5 className="font-semibold text-md">{title}</h5>
      </div>
      <div className="px-4 py-3 text-sm">
        <p className="mb-0">{description}</p>
      </div>
    </div>
  );
};

export default Alert;
