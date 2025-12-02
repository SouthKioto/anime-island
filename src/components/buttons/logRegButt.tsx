import React, { useState } from "react";
import { NavLink } from "react-router";

interface LogRegButtProps {
  name: string,
  navigate: string,
  onClick: () => void
}

export const LogRegButt: React.FC<LogRegButtProps> = ({ name, navigate, onClick }) => {

  return (
    <>
      <NavLink to={navigate}>
        <button
          onClick={onClick}
          className="bg-white border border-black rounded-full w-[177px] h-[50px] cursor-pointer text-center text-[20px]"
        >

          {name}
        </button>
      </NavLink>
    </>
  )
}

