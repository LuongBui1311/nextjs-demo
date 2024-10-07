import { getUser, loggingOut } from "@/app/lib/actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

interface UserType {
  id: string,
  email: string,
  name: string,
  address: string,
  role: string,
}

const UserAvatar = ({ accessToken }: any) => {
  const [user, setUser] = useState<UserType>();
  const logout = async () => {
    const refreshToken = sessionStorage.getItem("refreshToken");
    loggingOut(accessToken, refreshToken);
    window.location.href = "/product";
    sessionStorage.setItem("accessToken", "");
    sessionStorage.setItem("refreshToken", "");
  };

  useEffect(() => {
    getUser(accessToken).then((data) => {setUser(data)});
  })

  const handleClick = () => {
    logout();
  };
  return (
    <div className="flex gap-4">
      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="font-semibold font-serif">{user?.name}</p>
      </div>
      <Button
        className="font-serif bg-violet-700 text-white px-4 py-2 font-semibold rounded-xl"
        onClick={handleClick}
      >
        Log out
      </Button>
    </div>
  );
};

export default UserAvatar;
