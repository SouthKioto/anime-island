import { useState, useEffect } from "react";
import anime_isle_logo from "../images/anime_isle.png";
import { NavLink, useNavigate } from "react-router"
import axios from "axios";

export const Login = () => {

  const navigate = useNavigate();

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [alertProv, setAlertProv] = useState<boolean>(false);
  const [alert, setAlert] = useState<{ color: string, message: string }>({ color: '', message: '' });

  useEffect(() => {
    if (alertProv) {
      const timer = setTimeout(() => {
        setAlertProv(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [alertProv])

  const handleNavigateRegister = () => {
    navigate("/register");
  }

  const handleSubmitLogin = (e: any) => {
    e.preventDefault();

    if (!login && !password) {
      setAlertProv(true);
      setAlert({
        color: 'text-red-500',
        message: 'Prosze wypełnic pola'
      });
      return;
    }

    if (!login || !password) {
      setAlertProv(true);
      setAlert({
        color: 'text-red-500',
        message: "Nie podano loginu lub hasła"
      });
      return;
    }

    setAlertProv(false);

    const loginData = new FormData;
    loginData.append('login', login);
    loginData.append('password', password);

    axios
      .post('http://localhost/animeIslandBack/login.php', loginData)
      .then(
        res => {
          setAlertProv(true);
          setAlert({
            color: 'text-green-500',
            message: res.data.success
          })

          const login_data = {
            'email': res.data.user_data.email,
            'userName': res.data.user_data.nickname,
            'password': res.data.user_data.password,
            'id': res.data.user_data.user_id
          }

          console.log(login_data);
          localStorage.setItem('user_data', JSON.stringify(login_data));
        }
      )
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
      {/*
        TODO: skonczyc css logowania i dodac logike 

      */}

      <div className="flex justify-center">
        <div className="bg-white p-20 pt-10 rounded-2xl mt-12">


          {/* logo section */}
          <div className="">

            <div className="flex justify-center items-center">
              <p className="text-[50px]">Log In</p>

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
              <p className="ml-2">Username</p>

              <input className="border rounded-xl p-1.5 w-[350px] shadow-xl/20 shadow-black" type="text" onChange={e => setLogin(e.target.value)} />
            </div>

            {/* Password field*/}
            <div className="mt-12">
              <p className="ml-2">Password</p>

              <input className="border rounded-xl p-1.5 w-[350px] shadow-xl/20 shadow-black" type="password" onChange={e => setPassword(e.target.value)} />
            </div>
          </div>

          {/* buttons section */}
          <div className="flex justify-center items-center">
            <div className="mt-12">
              <div className="mt-5">
                <input type="button" className="bg-blue-500 p-2 w-[250px] cursor-pointer border rounded-xl" value="Log In" onClick={handleSubmitLogin} />
              </div>

              <div className="flex justify-center items-center mt-10">
                <p>Or if you're new</p>
              </div>

              <div className="mt-10">
                <input type="button" className="bg-blue-500 p-2 w-[250px] cursor-pointer border rounded-xl" value="Register" onClick={handleNavigateRegister} />
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

