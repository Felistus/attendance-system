import { useContext, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import LoginIcon from "../components/icons/LoginIcon";
import LogoutIcon from "../components/icons/LogoutIcon";
import MarkIcon from "../components/icons/MarkIcon";
import MaxIcon from "../components/icons/MaxIcon";
import MinIcon from "../components/icons/MinIcon";
import RegisterIcon from "../components/icons/RegisterIcon";
import TableIcon from "../components/icons/TableIcon";
import { AdminContext } from "../context/context-file";

export default function AdminPanel() {
  const navigate = useNavigate();
  const { adminUser, updateAdminUser } = useContext(AdminContext);
  const [showSideBar, setShowSideBar] = useState(true);
  const [sideBarFullScreen, setSideBarFullScreen] = useState(true);
  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
    setSideBarFullScreen(!sideBarFullScreen);
  };
  const handleLogout = () => {
    sessionStorage.removeItem("adminLoggedIn");
    updateAdminUser({});
    navigate("/");
  };
  const hideSideBar = () => {
    if (window.screen.width < 750) {
      setShowSideBar(false);
      setSideBarFullScreen(false);
    }
  };
  return (
    <main className="w-full h-screen bg-slate-200">
      <section className="flex h-full ">
        {showSideBar ? (
          <div
            className={
              `${sideBarFullScreen ? " w-full  " : " hidden "}` +
              "h-full w-full md:w-[300px] bg-[#536DFE] px-4 py-2 text-slate-200 uppercase font-mono duration-200 translate-x-0 translate-y-0"
            }
          >
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
            <div
              onClick={hideSideBar}
              className="font-medium h-[calc(100vh-152px)] py-16 space-y-4 "
            >
              <Link
                to={"/attendance-form"}
                className="flex items-center hover:underline decoration-2 space-x-1 "
              >
                <MarkIcon />
                <p> attendance</p>
              </Link>
              <Link
                to={"/login"}
                className="flex items-center hover:underline decoration-2 space-x-1 "
              >
                <LoginIcon />
                <p> user-login</p>
              </Link>
              {Object.keys(adminUser).length !== 0 ? (
                <div
                  onClick={handleLogout}
                  className="flex items-center hover:underline decoration-2 space-x-1 cursor-pointer "
                >
                  <LogoutIcon />
                  <p>logout</p>
                </div>
              ) : (
                <Link
                  to={"/"}
                  className="flex items-center hover:underline decoration-2 space-x-1 "
                >
                  <LoginIcon />
                  <p>admin-login</p>
                </Link>
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
            <div className="w-full md:text-left text-center flex flex-col justify-center h-16 text-xs font-bold">
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

        <div
          className={
            `${sideBarFullScreen ? " hidden " : " flex "}` +
            "w-full md:flex h-screen flex-col items-center justify-center px-4 py-2"
          }
        >
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
  );
}
