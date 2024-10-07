import React from "react";
import Logo from "../components/logo";

const AuthenLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid md:grid-cols-5 xl:grid-cols-2 gap-10 min-h-screen">
      <div className="md:col-span-3 xl:col-span-1">{children}</div>
      <div className="hidden md:block md:col-span-2 xl:col-span-1 bg-gradient-to-br from-violet-800 to-violet-300 w-full h-full"></div>
      <div className="absolute top-4 left-6">
        <Logo />
      </div>
    </div>
  );
};
export default AuthenLayout;
