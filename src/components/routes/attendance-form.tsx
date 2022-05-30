import AttendancePenIcon from "../icons/AttendancePenIcon";
import SignAttendanceImage from "../SignAttendanceImage";

export default function AttendanceForm() {
  return (
    <main className="w-full h-screen bg-slate-200">
      <section className="w-full h-full items-center justify-center flex md:flex-row-reverse flex-col-reverse px-4 ">
        <div className="md:w-3/6 flex justify-center items-center  ">
          <form
            action=""
            className="md:w-[400px] max-w-[400px] bg-[#536DFE] py-4 px-8 rounded-lg  "
          >
            <div className="flex justify-center items-center ">
              <AttendancePenIcon />
            </div>
            <p className="text-center text-white mt-3 text-xl font-bold uppercase">
              mark attendance
            </p>
            <input
              type="tel"
              name="attendance-phone-number"
              id="attendance-phone-number"
              className="px-2 py-4 outline-none rounded-md my-4 w-full uppercase "
              placeholder="phone number... (eg: 08012345678)"
            />
            <button className="w-full p-2 my-4 capitalize rounded-md bg-white hover:bg-[#CCCCCC] text-[#536DFE] font-bold">
              mark attendance
            </button>
          </form>
        </div>

        <div className="md:w-3/6 p-4 mb-4  ">
          <SignAttendanceImage />
        </div>
      </section>
    </main>
  );
}
