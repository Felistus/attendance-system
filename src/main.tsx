import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import Login from "./components/routes/login";
import AttendanceForm from "./components/routes/attendance-form";
import RegisterUser from "./components/routes/register-user";
import AttendanceTable from "./components/routes/attendance-table";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="register-user" element={<RegisterUser />} />
          <Route path="attendance-table" element={<AttendanceTable />} />
        </Route>
        <Route path="attendance-form" element={<AttendanceForm />} />
        <Route path="login" element={<Login />} />
        <Route
          path="*"
          element={
            <main className="p-4">
              <p>There is nothing Here...!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
