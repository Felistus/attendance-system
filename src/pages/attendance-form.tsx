import AttendancePenIcon from "../components/icons/AttendancePenIcon";
import SignAttendanceImage from "../components/SignAttendanceImage";

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
            <select
              name="courses"
              id="courses"
              className="outline-none w-full rounded-md px-2 py-2 uppercase"
            >
              <option value="" disabled aria-disabled>
                Select Course
              </option>
              <option value="English Language">English Language</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
              <option value="Philosophy">Philosophy</option>
              <option value="Engineering Drawing">Engineering Drawing</option>
              <option value="Engineering Workshop">Engineering Workshop</option>
              <option value="General Studies">General Studies</option>
              <option value="Statistics">Statistics</option>
            </select>
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
