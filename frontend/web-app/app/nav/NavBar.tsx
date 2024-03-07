import React from "react";
import Search from "./Search";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 flex flex-col sm:flex-row justify-between bg-white gap-4 p-5 sm:items-center text-gray-800 shadow-md cursor-pointer">
      <Logo />
      <div className="flex justify-between w-full items-center gap-4">
        <div className=" w-full">
          <Search />
        </div>
        <div className="">Login</div>
      </div>
    </header>
  );
};

export default NavBar;
