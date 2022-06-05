import { createContext } from "react";

export const UserDetailsContext = createContext({
  userDetails: localStorage.getItem("userInformation") || "[]",
  updateUserDetails: (newUser: {}) => {},
});

export const AdminContext = createContext({
  adminUser: sessionStorage.getItem("adminLoggedIn") || "{}",
  updateAdminUser: (currentPerson: {}) => {},
});

export const UserContext = createContext({
  user: sessionStorage.getItem("loggedUser") || "{}",
  updateLoggedInUser: (currentUser: {}) => {},
});
