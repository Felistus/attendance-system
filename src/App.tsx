import { Link } from "react-router-dom";
import AdminIcon from "./components/images/AdminIcon";
import LoginIcon from "./components/images/LoginIcon";
import MarkIcon from "./components/images/MarkIcon";

export default function App() {
  return (
    <main className="w-full h-screen bg-slate-200">
      <nav className="w-full font-mono bg-[#536DFE] h-[60px] flex justify-between items-center px-4 uppercase text-slate-200 ">
        <Link to={"/"} className="flex flex-col">
          <p className="font-bold text-3xl ">ink.it</p>
          <em className="text-xs">attendance system</em>
        </Link>
        <div className="space-x-4 font-medium flex">
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
        </div>
      </nav>
      <section className="w-full h-[calc(100vh-60px)] items-center justify-center flex px-4  ">
        <div className="md:w-3/6 flex justify-center items-center  ">
          <form
            action=""
            className="md:w-[400px] max-w-[400px] bg-[#536DFE] py-4 px-8 rounded-lg  "
          >
            <div className="flex justify-center items-center ">
              <AdminIcon />
            </div>
            <p className="text-center text-white mt-3 text-xl font-bold uppercase">
              register employee
            </p>
            <input
              type="text"
              name="first-name"
              id="first-name"
              className="px-2 py-4 outline-none rounded-md my-4 w-full uppercase "
              placeholder="Enter your first name"
            />
            <input
              type="text"
              name="last-name"
              id="last-name"
              className="px-2 py-4 outline-none rounded-md w-full uppercase "
              placeholder="Enter your last name"
            />
            <input
              type="tel"
              name="user-phone-number"
              id="user-phone-number"
              className="px-2 py-4 outline-none rounded-md my-4 w-full uppercase "
              placeholder="phone number... (eg: 08012345678)"
            />
            <button className="w-full p-2 mb-4 capitalize rounded-md bg-white hover:bg-[#CCCCCC] text-[#536DFE] font-bold">
              register
            </button>
          </form>
        </div>

        <div className="md:w-3/6 p-4 mb-4  ">
          {/* <SignAttendanceImage /> */}
        </div>
      </section>
    </main>
  );
}
