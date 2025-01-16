import React from "react";

const Card = () => {
  return (
    <div className=" border border-slate-200 rounded-xl">
      <div className="px-4 py-3 border-b">
        <h5 className="font-semibold text-lg">Card Title</h5>
      </div>
      <div className="p-4">
        <p>Card Content title</p>
        <h5>Card content description</h5>
      </div>
      <div className="px-4 py-3 border-t">
        <h5 className="text-md">Card Footer</h5>
      </div>
    </div>
  );
};

export default Card;
