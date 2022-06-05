import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { UserDetailsContext } from "../context/context-file";
import AdminIcon from "../components/icons/AdminIcon";
import { nameCheckReg, numberCheckReg } from "../utility";
import { userDetailType } from "../customTypes/types";

export default function RegisterUser() {
  const { userDetails, updateUserDetails } = useContext(UserDetailsContext);
  const [user, setUser] = useState<any[]>([...userDetails]);
  const [formDetail, setFormDetail] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  useEffect(() => {
    if (user.length !== 0) {
      localStorage.setItem("userInformation", JSON.stringify(user));
      updateUserDetails(user);
    }
  }, [user]);

  const handleRegisterFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (formDetail.firstName && formDetail.lastName && formDetail.phoneNumber) {
      const userMobile = formDetail.phoneNumber.match(numberCheckReg);
      const userName = formDetail.firstName.match(nameCheckReg);
      const surName = formDetail.lastName.match(nameCheckReg);

      if (!userName && !surName) {
        if (userMobile) {
          if (userMobile.length === 11) {
            const validUserMobile = userMobile.join("");

            const userInfo: userDetailType = {
              firstName: formDetail.firstName,
              lastName: formDetail.lastName,
              mobile: validUserMobile,
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
            setUser([...user, userInfo]);
            alert("Successfully registered");
            setFormDetail({
              firstName: "",
              lastName: "",
              phoneNumber: "",
            });
          } else {
            alert("Phone Number should be 11 digits");
          }
        } else {
          alert("Invalid number format");
        }
      } else {
        alert("Name should contain only alphabets");
      }
    } else {
      alert("Please provide all details");
    }
  };
  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormDetail({
      ...formDetail,
      firstName: event.target.value,
    });
  };
  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormDetail({
      ...formDetail,
      lastName: event.target.value,
    });
  };
  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormDetail({
      ...formDetail,
      phoneNumber: event.target.value,
    });
  };
  return (
    <div className="my-auto">
      <form
        onSubmit={handleRegisterFormSubmit}
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
          value={formDetail.firstName}
          onChange={handleFirstNameChange}
          className="px-2 py-4 outline-none rounded-md my-4 w-full uppercase "
          placeholder="Enter your first name"
        />
        <input
          type="text"
          name="last-name"
          value={formDetail.lastName}
          onChange={handleLastNameChange}
          className="px-2 py-4 outline-none rounded-md w-full uppercase "
          placeholder="Enter your last name"
        />
        <input
          type="tel"
          name="user-phone-number"
          value={formDetail.phoneNumber}
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
