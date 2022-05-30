import { Link, Outlet, NavLink } from "react-router-dom";
import LoginIcon from "./components/icons/LoginIcon";
import MarkIcon from "./components/icons/MarkIcon";
import RegisterIcon from "./components/icons/RegisterIcon";
import TableIcon from "./components/icons/TableIcon";

export default function App() {
  return (
    <main className="w-full h-screen bg-slate-200">
      <section className="flex h-full ">
        <div className="w-[300px] bg-[#536DFE] h-full px-4 py-2 text-slate-200 uppercase font-mono">
          <div className="w-fit h-16 mb-4  ">
            <Link to={"/"} className="flex flex-col    ">
              <p className="font-bold text-5xl ">ink.it</p>
              <em className="text-xs">attendance system</em>
            </Link>
          </div>
          <div className="font-medium h-[calc(100vh-152px)] py-16 space-y-4 ">
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
              <p>login</p>
            </Link>

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
        <div className="w-full h-screen flex items-center justify-center px-4 py-2">
          <Outlet />
        </div>
      </section>
    </main>
  );
}
