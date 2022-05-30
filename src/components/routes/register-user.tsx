import AdminIcon from "../icons/AdminIcon";

export default function RegisterUser() {
  return (
    <main className="">
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
    </main>
  );
}
