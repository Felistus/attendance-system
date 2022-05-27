import "./App.css";
import UserIcons from "./components/images/UserIcons";
import WelcomeLoginImage from "./components/images/WelcomeLoginImage";

function App() {
  return (
    <main className="w-full h-screen bg-slate-200">
      <section className="w-full h-full items-center justify-center flex md:flex-row flex-col-reverse px-4 ">
        <div className="md:w-3/6 flex justify-center items-center  ">
          <form
            action=""
            className="md:w-[400px] max-w-[400px] bg-[#536DFE] py-4 px-8 rounded-lg  "
          >
            <div className="flex justify-center items-center ">
              <UserIcons />
            </div>
            <p className="text-center text-white mt-3 text-xl font-bold">
              Welcome!
            </p>
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              className="px-2 py-4 outline-none rounded-md my-4 w-full "
              placeholder="Enter your phone number!"
            />
            <input
              type="password"
              id="password"
              className="px-2 py-4 outline-none rounded-md w-full "
              placeholder="Enter password to continue"
            />
            <button className="w-full p-2 my-4 rounded-md bg-white hover:bg-[#CCCCCC] text-[#536DFE] font-bold">
              Login
            </button>
          </form>
        </div>

        <div className="md:w-3/6 p-4 mb-4  ">
          <WelcomeLoginImage />
        </div>
      </section>
    </main>
  );
}

export default App;
