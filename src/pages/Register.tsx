import { useEffect, useState } from "react";
import anime_isle_logo from "../images/anime_isle.png";
import { NavLink, useNavigate } from "react-router"
import axios from "axios";

export const Register = () => {

  const [email, setEmail] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repPassword, setRepPassword] = useState<string>('');

  const [alertProv, setAlertProv] = useState<boolean>(false);
  const [alert, setAlert] = useState<{ color: string, message: string }>({ color: '', message: '' })

  const navigate = useNavigate();

  useEffect(() => {
    if (alertProv) {
      const timer = setTimeout(() => {
        setAlertProv(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [alertProv])

  const checkEmail = (email: string) => {
    //reg: ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
    const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (reg.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  const handleNavigateLogin = () => {
    navigate("/login");
  }

  const handleSubmitRegister = (e: any) => {
    e.preventDefault();

    if (!email && !userName && !password && !repPassword) {
      setAlertProv(true);
      setAlert({
        color: 'text-red-500',
        message: "Proszę wypełnić pola"
      });
      return;
    }

    if (!email || !userName || !password || !repPassword) {
      setAlertProv(true);
      setAlert({
        color: 'text-red-500',
        message: "Proszę wypełnić wszystkie pola"
      });
      return;
    }

    if (!checkEmail(email)) {
      setAlertProv(true);
      setAlert({
        color: 'text-red-500',
        message: "Niepoprawny adres email"
      });
      return;
    }

    setAlertProv(false);

    const registerData = new FormData();
    registerData.append('email', email);
    registerData.append('userName', userName);
    registerData.append('password', password);
    registerData.append('repPassword', repPassword);

    axios
      .post('http://localhost/animeIslandBack/register.php', registerData)
      .then(res => {

        setAlertProv(true);
        setAlert({
          color: "text-green-500",
          message: res.data
        })
      })
      .catch(error => {
        if (error.response && error.response.data.error) {
          setAlertProv(true);
          setAlert({
            color: 'text-red-500',
            message: error.response.data.error
          })
        }
      });
  }

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


            {/* Alert section */}
            {alertProv ? (
              <div className={`flex justify-center items-center ${alert.color} p-4`}>{alert.message}</div>
            ) : (
              <></>
            )}

            {/* Username field*/}
            <div>
              <p className="ml-2">Email</p>

              <input className="border rounded-xl p-1.5 w-[350px] shadow-xl/20 shadow-black" type="email" onChange={e => setEmail(e.target.value)} />
            </div>


            <div className="mt-4">
              <p className="ml-2">Username</p>

              <input className="border rounded-xl p-1.5 w-[350px] shadow-xl/20 shadow-black" type="text" onChange={e => setUserName(e.target.value)} />
            </div>

            {/* Password field*/}
            <div className="mt-4">
              <p className="ml-2">Password</p>

              <input className="border rounded-xl p-1.5 w-[350px] shadow-xl/20 shadow-black" type="password" onChange={e => setPassword(e.target.value)} />
            </div>


            <div className="mt-4">
              <p className="ml-2">Repeat password</p>

              <input className="border rounded-xl p-1.5 w-[350px] shadow-xl/20 shadow-black" type="password" onChange={e => setRepPassword(e.target.value)} />
            </div>
          </div>


          {/* buttons section */}
          <div className="flex justify-center items-center">
            <div className="mt-5">
              <div className="mt-10">
                <input type="button" className="bg-blue-500 p-2 w-[250px] cursor-pointer border rounded-xl" value="Register" onClick={handleSubmitRegister} />
              </div>

              <div className="flex justify-center items-center mt-10">
                <p>Or, if you have an account </p>
              </div>

              <div className="mt-12">
                <input type="button" className="bg-blue-500 p-2 w-[250px] cursor-pointer border rounded-xl" value="Log In" onClick={handleNavigateLogin} />
              </div>
            </div>
          </div>


        </div>
      </div>

    </>
  )
}

