import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDetailsContext from "../../context/userContext";
import UserIcons from "../icons/UserIcons";
import WelcomeLoginImage from "../WelcomeLoginImage";
import Cookies from "js-cookie";
export default function Login() {
  const navigate = useNavigate();
  const userDetails = useContext(UserDetailsContext).userDetails;
  const users = JSON.parse(userDetails);
  const numberCheckReg = /[0-9]/g; //regular expression to check if the user phone number contains digits only or combined and extracts only digits
  const [loginDetails, setLoginDetails] = useState({
    phoneNumber: "",
    password: "",
  });
  const handleLoginFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (loginDetails.phoneNumber && loginDetails.password) {
      const loginMobile = loginDetails.phoneNumber.match(numberCheckReg);

      if (loginMobile) {
        if (loginMobile.length === 11) {
          const validUserMobile = loginMobile.join("");
          const registeredUser = users.find(
            (user: { mobile: string }) => user.mobile === validUserMobile
          );
          if (registeredUser) {
            if (registeredUser.password === loginDetails.password) {
              Reflect.deleteProperty(registeredUser, "password");
              console.log(registeredUser);
              sessionStorage.setItem(
                "loggedInUser",
                JSON.stringify(registeredUser)
              );
              // Cookies.set("user", JSON.stringify(registeredUser));
              // navigate("/attendance-form");
            } else {
              alert("Wrong Password");
            }
          } else {
            alert("User does not exist");
          }
        } else {
          alert("Phone number must be 11 digits");
        }
      } else {
        alert("Phone number must contain digits only");
      }
    } else {
      alert("Please provide all details");
    }
  };

  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginDetails({
      ...loginDetails,
      phoneNumber: event.target.value,
    });
  };
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginDetails({
      ...loginDetails,
      password: event.target.value,
    });
  };

  useEffect(() => {
    const loggedInUser = JSON.parse(
      sessionStorage.getItem("loggedInUser") || "{}"
    );
    if (Object.keys(loggedInUser).length === 0) navigate("/login");
    else {
      if (loggedInUser["mobile"] === "23288923292") navigate("/");
      else navigate("/attendance-form");
    }
  }, []);

  return (
    <main className="w-full h-screen bg-slate-200">
      <section className="w-full h-full items-center justify-center flex md:flex-row flex-col-reverse px-4 ">
        <div className="md:w-3/6 flex justify-center items-center  ">
          <form
            action=""
            onSubmit={handleLoginFormSubmit}
            className="md:w-[400px] max-w-[400px] bg-[#536DFE] py-4 px-8 rounded-lg  "
          >
            <div className="flex justify-center items-center ">
              <UserIcons />
            </div>
            <p className="text-center text-white mt-3 text-xl font-bold uppercase">
              Welcome!
            </p>
            <input
              type="tel"
              value={loginDetails.phoneNumber}
              onChange={handlePhoneNumberChange}
              className="px-2 py-4 outline-none rounded-md my-4 w-full uppercase "
              placeholder="phone number... (eg: 08012345678)"
            />
            <input
              type="password"
              value={loginDetails.password}
              onChange={handlePasswordChange}
              className="px-2 py-4 outline-none rounded-md w-full uppercase "
              placeholder="Enter password to continue"
            />
            <button className="w-full p-2 my-4 capitalize rounded-md bg-white hover:bg-[#CCCCCC] text-[#536DFE] font-bold">
              login
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
