import axios from "axios";

import { NavLink } from "react-router";
import anime_isle_logo from "../images/anime_isle.png";

import { LogRegButt } from "./buttons/logRegButt";
import { useState } from "react";

export const NavBar = () => {

  const [isLoggedIn, SetIsLoggetIn] = useState(false);


  return (
    <>
      <div className="bg-gray-300/60 w-full rounded-b-2xl border shadow-xl/20 shadow-black flex items-center px-3">

        {/* Sekcja logo */}
        <div className="flex items-center">
          <img src={anime_isle_logo} alt="animeIsleLogo" className="h-[116px]" />
          <p className="ml-1 text-[50px] font-semibold">Anime Isle</p>
        </div>

        {/* Sekcja lista */}
        <ul className="flex-1 flex justify-center space-x-5 text-[20px]">
          <li className="cursor-pointer">
            <NavLink to={'/anime_list'}>
              <p className="hover:text-2xl">
                Anime
              </p>
            </NavLink>
          </li>

          <li className="cursor-pointer">
            <NavLink to={'/serach'}>
              <p className="hover:text-2xl">
                Search
              </p>
            </NavLink>
          </li>

          <li className="cursor-pointer">
            <NavLink to={'/commnets'}>
              <p className="hover:text-2xl">
                Comments
              </p>
            </NavLink>
          </li>
        </ul>

        {/* Sekcja logowanie */}
        <div className="flex items-center">
          {isLoggedIn ? (
            <LogRegButt name="Your Account" navigate={'/userAcc'} />
          ) : (
            <LogRegButt name="Log In" navigate={'/login'} />
          )}
        </div>
      </div>
    </>
  )
}
