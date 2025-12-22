import React, { useState } from "react";
import { NavLink } from "react-router";

interface LogRegButtProps {
  name: string,
  navigate: string,
}

export const LogRegButt: React.FC<LogRegButtProps> = ({ name, navigate }) => {

  return (
    <>
      <NavLink to={navigate}>
        <button
          className="bg-white border border-black rounded-full w-[177px] h-[50px] cursor-pointer text-center text-[20px]"
        >
          {name}
        </button>
      </NavLink>
    </>
  )
}

