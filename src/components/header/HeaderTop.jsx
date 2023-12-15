import {
  ArrowDropDownOutlined,
  LocationOnOutlined,
  Logout,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import { getAuth, signOut } from "firebase/auth";
import { logo } from "../../assets/img";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { headerItems } from "../../constants";
import { userSignOuT } from "../../redux/amazonSlice";
export const HeaderTop = () => {
  const auth = getAuth();
  const products = useSelector((state) => state.amazonReducer.products);
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);
  const dispatch = useDispatch();
  const [showAll, setShowAll] = useState(false);
  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        showAll && setShowAll(false);
      }
    });
  }, [ref, showAll]);
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(userSignOuT());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full bg-amazon_blue text-white px-4 py-3 flex md:justify-between items-center gap-2 md:gap-4 lgl:gap-2 xl:gap-4 bg-amazonGreen">
      {/* ===================== Header Image Start here ======================== */}
      <Link to="/">
        <div className="headerHover">
          <img className="w-24 mt-2" src={logo} alt="logoImage" />
        </div>
      </Link>
      {/* ===================== Header Image End here ========================== */}
      {/* ===================== Header Deliver Start here ====================== */}
      <div className="hidden md:inline-flex headerHover">
        <LocationOnOutlined />
        <p className="flex flex-col text-xs text-lightText font-light">
          Deliver to{" "}
          <span className="text-sm font-semibold -mt-1 text-whiteText">
            Uzbekistan
          </span>
        </p>
      </div>
      {/* ===================== Header Deliver End here ======================== */}
      {/* ===================== Header Search Start here ======================== */}
      <div className="hidden lgl:inline-flex h-10 rounded-md flex-grow relative">
        <span
          onClick={() => setShowAll(!showAll)}
          className="w-14 h-full bg-[#e6e6e6] hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md text-black"
        >
          All{" "}
          <span>
            <ArrowDropDownOutlined />
          </span>
        </span>
        {showAll && (
          <div>
            <ul
              ref={ref}
              className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue p-2 flex flex-col gap-1 z-50"
            >
              {headerItems.map((item) => (
                <li
                  className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200 text-black "
                  key={item._id}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        )}

        <input
          className="h-full text-base text-amazon_blue text-black flex-grow outline-none border-none px-2"
          type="text"
          placeholder="Search Amazon"
        />
        <span className="w-12 h-full flex items-center justify-center bg-red-200 hover:bg-red-300 text-black duration-200 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
          <Search />
        </span>
      </div>
      {/* ===================== Header Search End here ========================== */}
      {/* ===================== Header Signin Start here ======================== */}
      <Link to="/signin">
        <div className="flex flex-col items-start justify-center headerHover">
          {userInfo ? (
            <p className="text-xs text-gray-100 font-medium capitalize">
              {userInfo.userName}
            </p>
          ) : (
            <p className="text-xs text-lightText font-light">Hello, sign in</p>
          )}

          <p className="hidden md:inline-flex text-sm font-semibold -mt-1 text-whiteText">
            Accounts & Lists{" "}
            <span>
              <ArrowDropDownOutlined />
            </span>
          </p>
        </div>
      </Link>
      {/* ===================== Header Signin End here ========================== */}
      {/* ===================== Header Orders Start here ======================== */}
      <div className="hidden mdl:flex flex-col items-start justify-center headerHover">
        <p className="text-xs text-lightText font-light">Returns</p>
        <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
      </div>
      {/* ===================== Header Orders End here ========================== */}
      {/* ===================== Header Cart Start here ========================== */}
      <Link to="/cart">
        <div className="flex items-start justify-center headerHover relative">
          <ShoppingCart />
          <p className="hidden mdl:inline-flex text-xs font-semibold mt-3 text-whiteText">
            Cart
          </p>
          <span className="absolute text-xs top-0 left-6 w-4 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
            {products.length > 0 ? products.length : 0}
          </span>
        </div>
      </Link>
      {userInfo && (
        <div
          onClick={handleLogOut}
          className="flex flex-col justify-center items-center headerHover relative"
        >
          <Logout />
          <p className=" mdl:inline-flex text-xs font-semibold text-whiteText">
            Log out
          </p>
        </div>
      )}
    </div>
  );
};

export default HeaderTop;
