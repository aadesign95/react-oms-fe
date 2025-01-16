import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/Login/LoginPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import GeneralSettings from "./pages/Settings/GeneralSettings";
import AccountSettings from "./pages/Settings/AccountSettings";
import TransactionPage from "./pages/Transactions/TransactionPage";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/transaction" element={<TransactionPage />} />
          <Route path="/settings/general" element={<GeneralSettings />} />
          <Route path="/settings/account" element={<AccountSettings />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
