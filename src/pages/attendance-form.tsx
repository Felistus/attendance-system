import { ChangeEvent, FormEvent, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AttendancePenIcon from "../components/icons/AttendancePenIcon";
import SignAttendanceImage from "../components/SignAttendanceImage";
import { UserContext, UserDetailsContext } from "../context/context-file";

export default function AttendanceForm() {
  const navigate = useNavigate();
  const loggedUser = useContext(UserContext).user;
  const userDetails = useContext(UserDetailsContext).userDetails;
  const selectOptionRef = useRef<HTMLSelectElement>(null);
  const [userNumber, setUserNumber] = useState<string>("");

  const calculateAttendance = (numbers: number) => {
    const attendance = (numbers / 100) * 100;
    return `${attendance} %`;
  };
  const handleSubmit = (e: FormEvent) => {
    const subject: any = selectOptionRef.current?.value;
    e.preventDefault();
    if (userNumber !== "" && selectOptionRef.current?.value !== "") {
      if (loggedUser.mobile === userNumber) {
        userDetails.forEach((user: any, index: number) => {
          if (user.mobile === userNumber) {
            if (user.hasOwnProperty(subject)) {
              user[subject] += 1;
              user.password = loggedUser.password;
              const totalAttendance: number =
                user.biology +
                user.chemistry +
                user.physics +
                user.mathematics +
                user.englishLanguage +
                user.engineeringDrawing +
                user.engineeringWorkshop +
                user.philosophy +
                user.generalStudies +
                user.statistics;
              user.percentageAttendance = calculateAttendance(totalAttendance);
            }
          }
          userDetails.splice(index, 1, user);
          alert("Successfully signed attendance");
          sessionStorage.removeItem("loggedUser");
          navigate("/login");
          return userDetails;
        });
      } else {
        return alert("User not logged in!");
      }
      localStorage.setItem("userInformation", JSON.stringify(userDetails));
    }
  };

  const handleUserNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserNumber(event.target.value);
  };
  return (
    <main className="w-full h-screen bg-slate-200">
      <section className="w-full h-full items-center justify-center flex md:flex-row-reverse flex-col-reverse px-4 ">
        <div className="md:w-3/6 flex justify-center items-center  ">
          <form
            onSubmit={handleSubmit}
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
              value={userNumber}
              onChange={handleUserNumberChange}
              className="px-2 py-4 outline-none rounded-md my-4 w-full uppercase "
              placeholder="phone number... (eg: 08012345678)"
            />
            <select
              name="courses"
              ref={selectOptionRef}
              id="courses"
              className="outline-none w-full rounded-md px-2 py-2 uppercase"
            >
              <option value="" disabled aria-disabled>
                Select Course
              </option>
              <option value="englishLanguage">English Language</option>
              <option value="mathematics">Mathematics</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="biology">Biology</option>
              <option value="philosophy">Philosophy</option>
              <option value="engineeringDrawing">Engineering Drawing</option>
              <option value="engineeringWorkshop">Engineering Workshop</option>
              <option value="generalStudies">General Studies</option>
              <option value="statistics">Statistics</option>
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
