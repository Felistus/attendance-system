import React from "react";

const UserDetailsContext = React.createContext({
  userDetails: localStorage.getItem("userInformation") || "[]",
  updateUserDetails: (newUser: {}) => {},
});

export default UserDetailsContext;
