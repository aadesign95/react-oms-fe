import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

const Layout = ({ children, backgroundColor }) => {
  const location = useLocation();
  const excludePaths = ["/", "/login", "/register"];
  const isSidebarVisible = !excludePaths.includes(location.pathname);

  return (
    <div className="flex">
      {/* Sidebar hanya ditampilkan jika halaman bukan login */}
      {isSidebarVisible && <Sidebar />}
      <div
        className={`flex-1 ${
          isSidebarVisible ? "p-6" : ""
        } min-h-screen bg-white`}
      >
        {children}
      </div>
    </div>
  );
  return <div className={backgroundColor}>{children}</div>;
};

export default Layout;
