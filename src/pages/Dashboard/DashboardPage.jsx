import React from "react";
import Alert from "../../components/Alert/Alert";

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to the Dashboard</h1>
      <p className="text-gray-700">
        This is your main dashboard area where you can view and manage your
        data.
      </p>

      <div className="mt-6 border-b pb-4">
        <h1 className="text-xl font-bold ">Alert</h1>
        <p>This is alert variant</p>
      </div>

      <section className="my-6 grid grid-cols-5 gap-5">
        <Alert
          title="Primary Alert"
          description="This is a primary Alert."
          footer="Footer Text"
          type="primary"
          icon={true}
        />
        <Alert
          title="Success Alert"
          description="This Alert indicates success."
          footer="Footer Text"
          type="success"
          icon={true}
        />
        <Alert
          title="Warning Alert"
          description="This Alert indicates a warning."
          footer="Footer Text"
          type="warning"
          icon={true}
        />
        <Alert
          title="Danger Alert"
          description="This Alert indicates danger."
          footer="Footer Text"
          type="danger"
          icon={true}
        />
        <Alert
          title="Default Alert"
          description="This is a default Alert with no specific type."
          footer="Footer Text"
          type="default"
          icon={true}
        />
      </section>
    </div>
  );
};

export default DashboardPage;
