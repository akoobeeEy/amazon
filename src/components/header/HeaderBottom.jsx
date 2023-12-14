import { AccountCircle, Close, Menu } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import SideNavContent from "./SideNavContent";
import { motion } from "framer-motion";

const HeaderBottom = () => {
  const ref = useRef();
  const [sidebar, setSideBar] = useState(false);
  useEffect(()=>{
    document.body.addEventListener("click",(e)=>{
      if(e.target.contains(ref.current)){
        setSideBar(false)
      }
    })
  },[ref,sidebar])
  return (
    <div className="bg-amazonLightGreen px-4 h-[36px] text-white flex items-center">
      {/* ListItems start here */}
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li
          onClick={() => setSideBar(true)}
          className="headerHover flex items-center gap-1"
        >
          <Menu /> All
        </li>
        <li className="headerHover">Today`s Deals</li>
        <li className="headerHover"> Registry</li>
        <li className="headerHover">Customer Service</li>
        <li className="headerHover"> Gift Cards </li>
        <li className="headerHover"> Sell</li>
      </ul>
      {/* ListItems end here */}
      {/* Sidenav start here */}
      {sidebar && (
        <div
          className="w-full h-screen text-black fixed top-0 left-0 bg-bgScreen
         bg-opacity-50 z-30"
        >
          <div className="w-full h-full relative">
            <motion.div ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[350px] h-full bg-white border border-black "
            >
              <div className="w-full bg-amazonLightBlue text-white py-2 px-6 flex items-center gap-4">
                <AccountCircle />
                <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  Hello, Sign In
                </h3>
              </div>
              <SideNavContent
                title="Digital Content & Devices"
                one="Amazon Music"
                two="Kindle E-readers & Books"
                three="Amazon Appstore"
              />
              <SideNavContent
                title="Shop By Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SideNavContent
                title="Programs & Features"
                one="Gift Cards"
                two="Shop By Interest"
                three="Amazon Live"
                four="International Shopping"
              />
              <SideNavContent
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Sign in"
                four="International Shopping"
              />
            </motion.div>
            <motion.span
              className="absolute top-1 left-[360px] cursor-pointer w-10 h-10 text-amazonGreen flex items-center justify-center border bg-gray-200 hover:bg-amazonLightGreen hover:text-white duration-300"
              onClick={() => setSideBar(false)}
            >
              <Close />
            </motion.span>
          </div>
        </div>
      )}
      {/* Sidenav end here */}
    </div>
  );
};

export default HeaderBottom;
