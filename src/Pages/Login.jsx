import React, { useState } from "react";
import loginIcon from "../assest/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <section id="login">
        <div className="mx-auto container p-4">
          <div className="bg-white p-4 py-5 w-full max-w-sm mx-auto">
            <div className="w-20 h-20 mx-auto">
              <img src={loginIcon} alt="Login Icon" />
            </div>

            <form action="" className="pt-5">
              <div className="grid ">
                <label htmlFor="Email" className="mx-2">
                  Email :
                </label>
                <div className="bg-slate-100 p-2 rounded-full my-2">
                  <input
                    type="email"
                    placeholder="Enter E-mail"
                    className="w-full h-full outline-none bg-transparent"
                  />
                </div>
              </div>
              <div className="my-3">
                <label htmlFor="Password" className="mx-2">
                  Password :
                </label>
                <div className="bg-slate-100 p-2 flex  rounded-full my-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    className="w-full h-full outline-none bg-transparent"
                  />
                  <div
                    className="cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    <span>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
                  </div>
                </div>
                <Link
                  to={"/forgot-password"}
                  className="block w-fit ml-auto hover:underline hover:text-red-600"
                >
                  Forget Password
                </Link>
              </div>
              <button className="bg-red-600 text-white w-full px-5 py-2 max-w-[150px] rounded-full hover:scale-110  transition-all mx-auto block mt-4 hover:bg-red-500">
                Login
              </button>
            </form>
            <p className="mt-3 block w-fit mx-auto">
              Don't have account ?
              <Link
                className="text-red-600 hover:text-red-700 hover:underline"
                to={"/sign-up"}
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
