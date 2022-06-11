import { useContext, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  AdminContext,
  UserContext,
  UserDetailsContext,
} from "./context/context-file";
import AdminLogin from "./pages/admin-login";
import AdminPanel from "./pages/admin-panel";
import AttendanceForm from "./pages/attendance-form";
import AttendanceTable from "./pages/attendance-table";
import Login from "./pages/login";
import PageNotFound from "./pages/pageNotFound";
import RegisterUser from "./pages/register-user";

export default function App() {
  const [userDetails, setUserDetails] = useState(
    JSON.parse(localStorage.getItem("userInformation") || "[]")
  );
  const [adminUser, setAdminUser] = useState(
    JSON.parse(sessionStorage.getItem("adminLoggedIn") || "{}")
  );
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("loggedUser") || "{}")
  );

  function updateUserDetails(newUser: {}) {
    setUserDetails(newUser);
  }
  function updateLoggedInUser(newUser: {}) {
    setUser(newUser);
  }
  function updateAdminUser(currentPerson: {}) {
    setAdminUser(currentPerson);
  }

  return (
    <UserDetailsContext.Provider value={{ userDetails, updateUserDetails }}>
      <AdminContext.Provider value={{ adminUser, updateAdminUser }}>
        <UserContext.Provider value={{ user, updateLoggedInUser }}>
          <BrowserRouter>
            <Routes>
              <Route element={<AdminPanel />}>
                <Route path="/" element={<AdminLogin />} />
                <Route
                  path="register-user"
                  element={
                    <RequireAuth>
                      <RegisterUser />
                    </RequireAuth>
                  }
                />
                <Route
                  path="attendance-table"
                  element={
                    <RequireAuth>
                      <AttendanceTable />
                    </RequireAuth>
                  }
                />
              </Route>
              <Route
                path="attendance-form"
                element={
                  <ProtectedPage>
                    <AttendanceForm />
                  </ProtectedPage>
                }
              />

              <Route path="login" element={<Login />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
          <ToastContainer autoClose={2000} />
        </UserContext.Provider>
      </AdminContext.Provider>
    </UserDetailsContext.Provider>
  );
}

function RequireAuth({ children }: { children: JSX.Element }) {
  const loggedInUser = useContext(AdminContext).adminUser;
  if (Object.keys(loggedInUser).length !== 0) {
    return children;
  }
  return <Navigate to="/" />;
}
function ProtectedPage({ children }: { children: JSX.Element }) {
  const loggedInUser = useContext(UserContext).user;
  if (Object.keys(loggedInUser).length !== 0) {
    return children;
  }
  return <Navigate to="/login" />;
}
