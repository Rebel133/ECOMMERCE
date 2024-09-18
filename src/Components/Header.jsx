import React from "react";
import Logo from "./Logo";
import { GrSearch } from "react-icons/gr";
import { FaCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <header className="h-16 shadow-md">
        <div className="h-full containermx-auto px-4 flex items-center justify-between">
          <div className="">
            <Logo w={90} h={50} />
          </div>
          <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
            <input
              type="text"
              placeholder="Search Your Product.."
              className="w-full outline-none"
            />
            <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
              <GrSearch />
            </div>
          </div>
          <div className="flex items-center gap-7">
            <div className="text-3xl">
              <FaCircleUser />
            </div>
            <div className="relative">
              <span className="text-2xl ">
                <FaShoppingCart />
              </span>
              <div className="bg-red-600 absolute -top-2 -right-2 text-white w-5 p-1 h-5 rounded-full flex items-center justify-center">
                <p className="text-xl"></p>0
              </div>
            </div>

            <div>
              <button className="px-3 py-1 bg-red-600 text-white rounded-full hover:bg-red-700">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
