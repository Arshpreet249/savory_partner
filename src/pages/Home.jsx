import React, { useState, useRef,useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Dashboard from "../pages/Dashboard";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Outlet } from "react-router-dom";

const Home = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
   const [user, setUser] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(isDesktop);
  const sidebarRef = useRef(null);

    useEffect(() => {

    setIsSidebarOpen(isDesktop);
  }, [isDesktop]);

   useEffect(() => {
    const storeduser = localStorage.getItem("user");
    if (storeduser) {
      const parsedUser = JSON.parse(storeduser);
      setUser(parsedUser);

      console.log("user", parsedUser)
    }
  }, []);


  return (
    <div className="relative flex h-screen overflow-hidden bg-slate-50">
      {/* Sidebar */}
      <Sidebar
      ref={sidebarRef}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {!isDesktop && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-10"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          user={user}
        />
        <div className="flex-1 overflow-y-auto p-4 bg-no-repeat bg-contain bg-center">
          <Outlet context={{ user, setUser }}/>
        </div>
      </div>
    </div>
  );
};

export default Home;




