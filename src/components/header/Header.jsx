import { ArrowDropDownOutlined, Search } from "@mui/icons-material";
import { logo } from "../../assets/img";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";
import { headerItems } from "../../data";
const Header = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <header className="font-bodyFont">
      <div className="flex items-center w-full gap-4 px-4 py-3 text-white bg-amazonGreen++">
        {/* Image start here */}
        <div className=" headerHover">
          <img className="w-24 mt-2" src={logo} alt="" />
        </div>
        {/* Image end here */}
        {/*==== Deliver start here ====== */}
        <div className="headerHover">
          <LocationOnIcon />
          <p className="flex flex-col text-sm font-light text-lightText">
            Deliver to{" "}
            <span className="-mt-1 text-sm font-semibold text-whiteText">
              Oman
            </span>
          </p>
        </div>
        {/*==== Deliver end here ====== */}
        {/* Search start here */}
        <div className="relative flex flex-grow h-10 rounded-md">
          <span
            onClick={() => setShowAll(!showAll)}
            className="flex items-center justify-center h-full text-sm bg-gray-200 border-2 cursor-pointer text-amazonBlue rounded-bl-md rounded-tl-md w-14 hover:bg-gray-300 font-titleFont"
          >
            All{" "}
            <span>
              <ArrowDropDownOutlined />
            </span>
          </span>
          {showAll && (
            <div>
              <ul
                className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px]
              border-amazonBlue text-black p-2 flex flex-col gap-1 z-50 "
              >
                {headerItems.map((item) => (
                  <li
                    className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazonBlue cursor-pointer duration-200"
                    key={item.id}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            className="flex-grow h-full px-2 text-base border-none outline-none text-amazonBlue"
            type="text"
          />
          <span className="flex items-center justify-center w-12 h-full bg-amazonYellow hover:bg-[#f3a847] duration-300 text-amazonBlue cursor-pointer rounded-tr-md rounded-br-md">
            <Search />
          </span>
        </div>
        {/* Search end here */}
        {/* Sigin Start here */}
        <div className="flex flex-col items-start justify-center headerHover ">
          <p>Hello, sign in</p>
          <p>
            Accounts & Lists{" "}
            <span>
              <ArrowDropDownOutlined />
            </span>
          </p>
        </div>
        {/* Sigin End here */}
      </div>
    </header>
  );
};

export default Header;
