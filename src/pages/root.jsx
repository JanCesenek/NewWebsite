import React, { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import { CZ, GB } from "country-flag-icons/react/3x2";

export const LanguageContext = createContext();

const RootLayout = () => {
  const [czech, setCzech] = useState(true);

  return (
    <div className="relative">
      <div className="absolute sm:top-0 top-52 right-5 flex justify-around items-center sm:opacity-50">
        <CZ className="w-10 h-5 hover:cursor-pointer" onClick={() => setCzech(true)} />
        <GB className="w-10 h-5 hover:cursor-pointer" onClick={() => setCzech(false)} />
      </div>
      <LanguageContext.Provider value={{ czech }}>
        <Outlet />
      </LanguageContext.Provider>
    </div>
  );
};

export default RootLayout;
