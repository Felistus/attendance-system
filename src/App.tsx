import { useEffect, useState } from "react";
import { Link, Outlet, NavLink, useNavigate } from "react-router-dom";
import LoginIcon from "./components/icons/LoginIcon";
import LogoutIcon from "./components/icons/LogoutIcon";
import MarkIcon from "./components/icons/MarkIcon";
import MaxIcon from "./components/icons/MaxIcon";
import MinIcon from "./components/icons/MinIcon";
import RegisterIcon from "./components/icons/RegisterIcon";
import TableIcon from "./components/icons/TableIcon";
import UserDetailsContext from "./context/userContext";

export default function App() {
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState({});
  const [userDetails, setUserDetails] = useState(
    JSON.parse(localStorage.getItem("userInformation") || "[]")
  );
  function updateUserDetails(newUser: {}) {
    setUserDetails(newUser);
  }
  const [showSideBar, setShowSideBar] = useState(true);
  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  const handleLogout = () => {
    sessionStorage.removeItem("loggedInUser");
    location.reload();
  };
  useEffect(() => {
    const loggedInUser = JSON.parse(
      sessionStorage.getItem("loggedInUser") || "{}"
    );
    if (Object.keys(loggedInUser).length === 0) {
      navigate("/login");
    } else {
      if (loggedInUser["mobile"] === "23288923292") {
        setLoggedUser(loggedInUser);
        navigate("/");
      } else navigate("/attendance-form");
    }
  }, []);
  return (
    <UserDetailsContext.Provider value={{ userDetails, updateUserDetails }}>
      <main className="w-full h-screen bg-slate-200">
        <section className="flex h-full ">
          {showSideBar ? (
            <div className="w-[300px] bg-[#536DFE] h-full px-4 py-2 text-slate-200 uppercase font-mono duration-200 translate-x-0 translate-y-0">
              <div className="flex justify-between items-center w-full h-16 mb-4  ">
                <Link to={"/"} className="flex flex-col    ">
                  <p className="font-bold text-5xl ">ink.it</p>
                  <em className="text-xs">attendance system</em>
                </Link>
                <span
                  onClick={toggleSideBar}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black cursor-pointer "
                >
                  <MinIcon />
                </span>
              </div>
              <div className="font-medium h-[calc(100vh-152px)] py-16 space-y-4 ">
                <Link
                  to={"/attendance-form"}
                  className="flex items-center hover:underline decoration-2 space-x-1 "
                >
                  <MarkIcon />
                  <p> attendance</p>
                </Link>
                {!loggedUser ? (
                  <Link
                    to={"/login"}
                    className="flex items-center hover:underline decoration-2 space-x-1 "
                  >
                    <LoginIcon />
                    <p>login</p>
                  </Link>
                ) : (
                  <div
                    onClick={handleLogout}
                    className="flex items-center hover:underline decoration-2 space-x-1 cursor-pointer "
                  >
                    <LogoutIcon />
                    <p>logout</p>
                  </div>
                )}

                <NavLink
                  to={"/register-user"}
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold flex items-center hover:underline decoration-2 space-x-1 animate-pulse"
                      : "flex items-center hover:underline decoration-2 space-x-1"
                  }
                >
                  <RegisterIcon />
                  <p>register</p>
                </NavLink>
                <NavLink
                  to={"/attendance-table"}
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold flex items-center hover:underline decoration-2 space-x-1 animate-pulse"
                      : "flex items-center hover:underline decoration-2 space-x-1"
                  }
                >
                  <TableIcon />
                  <p>table</p>
                </NavLink>
              </div>
              <div className="w-full flex flex-col justify-center h-16 text-xs font-bold">
                <p>let's make that process easy</p>
                <p className="text-slate-800 font-serif">JaroTechnologies</p>
              </div>
            </div>
          ) : (
            <div
              onClick={toggleSideBar}
              className="absolute w-8 h-8 m-2 flex items-center justify-center rounded-full bg-black cursor-pointer "
            >
              <MaxIcon />
            </div>
          )}
          <div className="w-full h-screen flex flex-col items-center justify-center px-4 py-2">
            {!showSideBar ? (
              <Link
                to={"/"}
                className="flex flex-col text-gray-500 text-center uppercase font-mono   "
              >
                <p className="font-bold text-5xl ">ink.it</p>
                <em className="text-xs">attendance system</em>
              </Link>
            ) : null}
            <Outlet />
          </div>
        </section>
      </main>
    </UserDetailsContext.Provider>
  );
}
