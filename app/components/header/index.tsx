'use client';

import React from "react";
import LoginButton from "../button/loginButton";
import RegisterButton from "../button/registerButton";
import Logo from "../logo";
import UserAvatar from "../avatar";

const CustomHeader = () => {
  const accessToken = sessionStorage.getItem('accessToken');
  return (
    <div
      id="header-container"
      className="w-screen shadow-sm bg-slate-50 py-5 sticky top-0 left-0 z-10"
    >
      <div
        id="header"
        className="w-11/12 mx-auto flex justify-between items-center"
      >
        <Logo/>
        {accessToken ? <UserAvatar accessToken={accessToken}/> : (
          <div id="header-button" className="flex gap-x-2 md:gap-x-4">
          <LoginButton />
          <RegisterButton />
        </div>
        )}
      </div>
    </div>
  );
};

export default CustomHeader;
