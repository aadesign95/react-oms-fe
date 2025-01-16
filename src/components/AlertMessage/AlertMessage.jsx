import React from "react";

const AlertMessage = ({ message }) => {
  return (
    <div className="p-3 mb-4 text-red-700 bg-red-100 border border-red-400 rounded">
      {message}
    </div>
  );
};

export default AlertMessage;
