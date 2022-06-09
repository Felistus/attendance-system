import { createContext } from "react";

export const UserDetailsContext = createContext({
  userDetails: JSON.parse(localStorage.getItem("userInformation") || "[]"),
  updateUserDetails: (newUser: {}) => {},
});

export const AdminContext = createContext({
  adminUser: JSON.parse(sessionStorage.getItem("adminLoggedIn") || "{}"),
  updateAdminUser: (currentPerson: {}) => {},
});

export const UserContext = createContext({
  user: JSON.parse(sessionStorage.getItem("loggedUser") || "{}"),
  updateLoggedInUser: (currentUser: {}) => {},
});
