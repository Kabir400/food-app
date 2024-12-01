import { useState, createContext } from "react";

export const context = createContext();

function Store({ children }) {
  const value = useState({
    isCartOpen: false,
    loginChecked: false,
    isLogin: false,
    user: {},
    resturants: [],
  });

  return <context.Provider value={value}>{children}</context.Provider>;
}

export default Store;
