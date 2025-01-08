import React, { createContext, useState } from "react";

export let UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [UserToken, setUserToken] = useState(localStorage.getItem("userToken"));

  return (
    <UserContext.Provider value={{ UserToken, setUserToken }}>
      {children}
    </UserContext.Provider>
  );
}
