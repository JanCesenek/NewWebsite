import React, { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import { CZ, GB } from "country-flag-icons/react/3x2";
import { FaCopyright } from "react-icons/fa";

export const LanguageContext = createContext();

const RootLayout = () => {
  const [czech, setCzech] = useState(true);

  return (
    <div className="relative min-h-screen">
      <div className="absolute sm:top-0 top-64 right-2 flex justify-around items-center sm:opacity-50">
        <CZ className="w-10 h-5 hover:cursor-pointer" onClick={() => setCzech(true)} />
        <GB className="w-10 h-5 hover:cursor-pointer" onClick={() => setCzech(false)} />
      </div>
      <LanguageContext.Provider value={{ czech }}>
        <Outlet />
      </LanguageContext.Provider>
      <div className="w-full h-[2rem] bg-black flex justify-center items-center text-[0.8rem] mt-20">
        <FaCopyright className=" mr-2" />
        <div className="flex items-center">
          <p className="mr-2">|</p>
          <img src="/imgs/flamebulb.svg" alt="logo" className="w-[0.8rem]" />
          <p className="ml-2">Jan Cesenek 2025 | All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
