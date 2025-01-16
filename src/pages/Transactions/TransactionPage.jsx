import React, { useState } from "react";
import Table from "../../components/Table/Table";
import Label from "../../components/Label/Label";
import Select from "../../components/Select/Select"; // Pastikan path komponen sudah benar

const TransactionPage = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const options = [
    { label: "Select an Option", value: "" },
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const handleSelectChange = (value) => {
    setSelectedValue(value);
    console.log("Selected value:", value);
  };

  const columns = [
    { label: "#", key: "id" },
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Role", key: "role" },
    { label: "Actions", key: "actions" },
  ];

  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      actions: (
        <>
          <button className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600">
            Edit
          </button>
          <button className="ml-2 px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600">
            Delete
          </button>
        </>
      ),
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Editor",
      actions: (
        <>
          <button className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600">
            Edit
          </button>
          <button className="ml-2 px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600">
            Delete
          </button>
        </>
      ),
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Viewer",
      actions: (
        <>
          <button className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600">
            Edit
          </button>
          <button className="ml-2 px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600">
            Delete
          </button>
        </>
      ),
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Transaction</h1>
        <p className="text-gray-700">Here you can manage transactions.</p>
      </div>

      <div className="mb-6">
        <Label htmlFor="warehouse" text="Pilih Gudang" required={false} />
        <Select
          options={options}
          value={selectedValue}
          onChange={handleSelectChange}
          label={null} // Tidak perlu label tambahan dalam Select
        />
        {selectedValue && (
          <p className="mt-4 text-gray-700">
            Selected: <span className="font-semibold">{selectedValue}</span>
          </p>
        )}
      </div>

      <Table data={data} columns={columns} />
    </div>
  );
};

export default TransactionPage;
