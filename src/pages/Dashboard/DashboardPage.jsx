import React from "react";
import Card from "../../components/Card/Card";

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to the Dashboard</h1>
      <p className="text-gray-700">
        This is your main dashboard area where you can view and manage your
        data.
      </p>
      <section className="my-8 grid grid-cols-4 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
};

export default DashboardPage;
