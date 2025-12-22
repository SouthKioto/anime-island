import anime_isle_logo from "../images/anime_isle.png";
import { NavLink } from "react-router"

export const Register = () => {

  return (
    <>

      <div className="flex justify-center">
        <div className="bg-white p-20 pt-10 rounded-2xl mt-12">

          {/* logo section */}
          <div className="">

            <div className="flex justify-center items-center">
              <p className="text-[50px]">Register</p>

              <img src={anime_isle_logo} alt="animeIsleLogo" className="h-[100px]" />
            </div>

            <div className="flex justify-center items-center relative -top-4">
              <p className="text-[15px]">Welcome to our community</p>
            </div>

          </div>

          {/* input section */}
          <div className="mt-12">

            {/* Username field*/}
            <div>
              <p className="ml-2">Email</p>

              <input className="border rounded-xl p-1.5 w-[350px] shadow-xl/20 shadow-black" type="email" />
            </div>


            <div className="mt-4">
              <p className="ml-2">Username</p>

              <input className="border rounded-xl p-1.5 w-[350px] shadow-xl/20 shadow-black" type="text" />
            </div>

            {/* Password field*/}
            <div className="mt-4">
              <p className="ml-2">Password</p>

              <input className="border rounded-xl p-1.5 w-[350px] shadow-xl/20 shadow-black" type="password" />
            </div>


            <div className="mt-4">
              <p className="ml-2">Repeat password</p>

              <input className="border rounded-xl p-1.5 w-[350px] shadow-xl/20 shadow-black" type="password" />
            </div>
          </div>


          {/* buttons section */}
          <div className="flex justify-center items-center">
            <div className="mt-5">
              <div className="mt-10">
                <input type="button" className="bg-blue-500 p-2 w-[250px] cursor-pointer border rounded-xl" value="Register" />
              </div>

              <div className="flex justify-center items-center mt-10">
                <p>Or, if you have an account </p>
              </div>

              <div className="mt-12">
                <input type="button" className="bg-blue-500 p-2 w-[250px] cursor-pointer border rounded-xl" value="Log In" />
              </div>
            </div>
          </div>


        </div>
      </div>

    </>
  )

}

