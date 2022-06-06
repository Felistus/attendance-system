import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext, UserDetailsContext } from "../context/context-file";
import UserIcons from "../components/icons/UserIcons";
import WelcomeLoginImage from "../components/WelcomeLoginImage";
import Cookies from "js-cookie";
import { numberCheckReg } from "../utility";

export default function Login() {
  const navigate = useNavigate();
  const userDetails = useContext(UserDetailsContext).userDetails;
  const userArray = Array.isArray(userDetails) ? userDetails : [];
  const { user, updateLoggedInUser } = useContext(UserContext);
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
          const loggedInUser = userArray.find(
            (person: { mobile: string }) => person.mobile === validUserMobile
          );
          if (loggedInUser) {
            if (loggedInUser.password === loginDetails.password) {
              Reflect.deleteProperty(loggedInUser, "password");
              updateLoggedInUser(loggedInUser);
              // Cookies.set("user", JSON.stringify(loggedInUser));
              sessionStorage.setItem(
                "loggedUser",
                JSON.stringify(loggedInUser)
              );
              updateLoggedInUser(loggedInUser);
              navigate("/attendance-form");
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
    if (Object.keys(user).length !== 0) navigate("/attendance-form");
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
