import React,{useState,useEffect} from "react";
import ProfileImg from "../assets/images/profileimg.jpg";
import { Menu } from "lucide-react"; 


const Navbar = ({ isSidebarOpen, setIsSidebarOpen, user }) => {
 
  

  return (
    <div className="bg-white p-4 flex items-center justify-between  shadow-sm sticky top-0 z-0">
      <div className="flex items-center space-x-1">
        <button
          className=" p-1 rounded hover:bg-gray-100"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu className="w-5 h-5" />
        </button>
       
      </div>
      

      <div className="flex-1 flex justify-center mr-2">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-4 py-2 w-full max-w-lg focus:outline-none focus:ring-1 focus:ring-[#003049]"
        />
      </div>

      <div className="flex items-center justify-center gap-2">
        <p>  {user?.first_name} {user?.last_name}</p>
        <img
          className="w-10 h-10 object-cover rounded-full border-2 border-gray-300"
          src={ProfileImg}
          alt="User profile"
        />
      </div>
    </div>
  );
};

export default Navbar;
