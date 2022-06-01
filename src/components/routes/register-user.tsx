import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import AdminIcon from "../icons/AdminIcon";

interface userDetail {
  firstName: string;
  lastName: string;
  mobile: string;
  password: string;
  mathematics: number;
  englishLanguage: number;
  biology: number;
  chemistry: number;
  physics: number;
  engineeringDrawing: number;
  engineeringWorkshop: number;
  statistics: number;
  philosophy: number;
  generalStudies: number;
  date: Array<string>;
}
export default function RegisterUser() {
  const user = JSON.parse(localStorage.getItem("userInformation") || "[]");
  const [userDetails, setUserDetails] = useState<any[]>([...user]);
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  useEffect(() => {
    if (userDetails.length !== 0)
      localStorage.setItem("userInformation", JSON.stringify(userDetails));
  }, [userDetails]);
  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    const userInfo: userDetail = {
      firstName: formDetails.firstName,
      lastName: formDetails.lastName,
      mobile: formDetails.phoneNumber,
      password: Math.random().toString(36).slice(2),
      mathematics: 0,
      englishLanguage: 0,
      biology: 0,
      chemistry: 0,
      physics: 0,
      philosophy: 0,
      engineeringDrawing: 0,
      engineeringWorkshop: 0,
      generalStudies: 0,
      statistics: 0,
      date: [],
    };
    if (
      formDetails.firstName === "" ||
      formDetails.lastName === "" ||
      formDetails.phoneNumber === ""
    )
      return;
    else {
      setUserDetails([...userDetails, userInfo]);
    }
    setFormDetails({
      firstName: "",
      lastName: "",
      phoneNumber: "",
    });
  };
  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormDetails({
      ...formDetails,
      firstName: event.target.value,
    });
  };
  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormDetails({
      ...formDetails,
      lastName: event.target.value,
    });
  };
  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormDetails({
      ...formDetails,
      phoneNumber: event.target.value,
    });
  };
  return (
    <div className="my-auto">
      <form
        onSubmit={handleFormSubmit}
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
          value={formDetails.firstName}
          onChange={handleFirstNameChange}
          className="px-2 py-4 outline-none rounded-md my-4 w-full uppercase "
          placeholder="Enter your first name"
        />
        <input
          type="text"
          name="last-name"
          value={formDetails.lastName}
          onChange={handleLastNameChange}
          className="px-2 py-4 outline-none rounded-md w-full uppercase "
          placeholder="Enter your last name"
        />
        <input
          type="tel"
          name="user-phone-number"
          value={formDetails.phoneNumber}
          onChange={handlePhoneChange}
          className="px-2 py-4 outline-none rounded-md my-4 w-full uppercase "
          placeholder="phone number... (eg: 08012345678)"
        />
        <input
          type="submit"
          value="register"
          className="w-full p-2 mb-4 capitalize rounded-md bg-white hover:bg-[#CCCCCC] text-[#536DFE] font-bold"
        />
      </form>
    </div>
  );
}
