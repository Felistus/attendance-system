import delay from "lodash.delay";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AdminDetailsPopup from "../components/AdminDetailsPopup";
import AdminIcon from "../components/icons/AdminIcon";
import { AdminContext } from "../context/context-file";
import { adminDetailsType } from "../customTypes/types";
import { generateAdminNumber, numberCheckReg } from "../utility";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [tempAdminDetails, setTempAdminDetails] = useState<any[]>([]);
  const { adminUser, updateAdminUser } = useContext(AdminContext);
  const adminInfo = JSON.parse(localStorage.getItem("adminInfo") || "[]");
  const [adminLogin, setAdminLogin] = useState({
    phoneNumber: "",
    password: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (adminLogin.phoneNumber && adminLogin.password) {
      const adminMobile = adminLogin.phoneNumber.match(numberCheckReg);

      if (adminMobile) {
        if (adminMobile.length === 11) {
          const validAdminMobile = adminMobile.join("");
          const userAdmin = adminInfo.find(
            (user: { phoneNumber: string }) =>
              user.phoneNumber === validAdminMobile
          );
          if (userAdmin) {
            if (userAdmin.password === adminLogin.password) {
              Reflect.deleteProperty(userAdmin, "password");
              sessionStorage.setItem(
                "adminLoggedIn",
                JSON.stringify(userAdmin)
              );
              updateAdminUser(userAdmin);
              toast.success("Login successful");
              delay(() => {
                navigate("/attendance-table");
              }, 3000);
            } else {
              toast.error("Wrong password");
            }
          } else {
            toast.error("User does not exist");
          }
        } else {
          toast.warning("Invalid phone number (11 digits only!)");
        }
      } else {
        toast.warning("Phone number must contain digits only");
      }
    } else {
      toast.warning("Please provide all details");
    }
  };
  const handlePhone = (event: ChangeEvent<HTMLInputElement>) => {
    setAdminLogin({
      ...adminLogin,
      phoneNumber: event.target.value,
    });
  };
  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setAdminLogin({
      ...adminLogin,
      password: event.target.value,
    });
  };

  useEffect(() => {
    if (Object.keys(adminUser).length !== 0) navigate("/attendance-table");
    if (adminInfo.length !== 0 && adminInfo.length === 1) {
      return;
    } else {
      const createAdmin: any[] = [];
      const adminNum = generateAdminNumber(11);
      const adminDetails: adminDetailsType = {
        name: "Admin",
        phoneNumber: adminNum,
        password: Math.random().toString(36).slice(2),
      };
      createAdmin.push(adminDetails);
      setTempAdminDetails(createAdmin);
      localStorage.setItem("adminInfo", JSON.stringify(createAdmin));
    }
  }, []);
  return (
    <>
      <main className="my-auto">
        {tempAdminDetails &&
          tempAdminDetails.map((details: any, index: number) => {
            return (
              <div key={index}>
                <AdminDetailsPopup
                  mobile={details.phoneNumber}
                  access={details.password}
                  open={true}
                />
              </div>
            );
          })}
        <form
          onSubmit={handleSubmit}
          className="md:w-[400px] max-w-[400px] bg-[#536DFE] py-4 px-8 rounded-lg  "
        >
          <div className="flex justify-center items-center ">
            <AdminIcon />
          </div>
          <p className="text-center text-white mt-3 text-xl font-bold uppercase">
            Welcome admin!
          </p>
          <input
            type="tel"
            maxLength={11}
            value={adminLogin.phoneNumber}
            onChange={handlePhone}
            className="px-2 py-4 outline-none rounded-md my-4 w-full "
            placeholder="Phone number... (eg: 08012345678)"
          />
          <input
            type="password"
            value={adminLogin.password}
            onChange={handlePassword}
            className="px-2 py-4 outline-none rounded-md w-full  "
            placeholder="Enter password to continue"
          />
          <button className="w-full p-2 my-4 capitalize rounded-md bg-white hover:bg-[#CCCCCC] text-[#536DFE] font-bold">
            login
          </button>
          <div className="w-full flex justify-end">
            <button
              onClick={() => {
                localStorage.removeItem("adminInfo");
                updateAdminUser({});
                location.reload();
              }}
              className="text-white font-medium w-fit"
              title="test-button: delete temporary admin login details from localStorage and create new one"
            >
              Delete
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
