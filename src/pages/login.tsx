import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext, UserDetailsContext } from "../context/context-file";
import UserIcons from "../components/icons/UserIcons";
import WelcomeLoginImage from "../components/WelcomeLoginImage";
import { numberCheckReg } from "../utility";
import { toast } from "react-toastify";
import delay from "lodash.delay";

export default function Login() {
  const navigate = useNavigate();
  const userDetails = useContext(UserDetailsContext).userDetails;
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
          const loggedInUser = userDetails.find(
            (person: { mobile: string }) => person.mobile === validUserMobile
          );
          if (loggedInUser) {
            if (loggedInUser.password === loginDetails.password) {
              updateLoggedInUser(loggedInUser);
              sessionStorage.setItem(
                "loggedUser",
                JSON.stringify(loggedInUser)
              );
              updateLoggedInUser(loggedInUser);
              toast.success("Successfully logged in");
              delay(() => {
                navigate("/attendance-form");
              }, 3000);
            } else {
              toast.error("Wrong password");
            }
          } else {
            toast.info("User not found");
          }
        } else {
          toast.warning("Invalid phone number (11 digits only!)");
        }
      } else {
        toast.warning("Phone number must contain digits only");
      }
    } else {
      toast.warning("Please fill in all fields");
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
              hello student!
            </p>
            <input
              type="tel"
              maxLength={11}
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
