import React from "react";
import {useSelector} from "react-redux"
import { Logo, Input, Button } from "..";
import ProfileBtn from "./ProfileBtn";

const Header = () => {
    const authStatus = useSelector((state)=> state.auth.status)
  return (
    <nav className="flex sticky w-full max-w-full h-2/12 bg-cyan-50">
      <div className="flex items-center ml-auto w-1/5">
        <Logo />
        <span>|</span>
        <ul className="flex ml-auto">
          <li>FEED</li>
          <li>QUERY</li>
          <li>KEENING</li>
        </ul>
      </div>

      <div className="flex items-center mr-auto ">
        <Input
          className="w-80 px-4 py-2 rounded-full border border-white bg-black text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
          placeholder="Search For a Company"
        />
        {authStatus ? <ProfileBtn /> : <Button bgcolor="bg-orange" textColor="white" className="w-2">Join</Button>}
      </div>
    </nav>
  );
};

export default Header;
