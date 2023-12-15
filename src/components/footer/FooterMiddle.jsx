import { AttachMoney } from "@mui/icons-material";
import { bdFlag, logo } from "../../assets/img";
import { middleList } from "../../constants";
import FooterMiddleList from "./FooterMiddleList";

const FooterMiddle = () => {
  return (
    <div className="w-full bg-amazonLight text-white">
      {/* Top start here */}
      <div className="w-full border-b-[1px] border-gray-500 py-10">
        <div className="max-w-5xl mx-auto text-gray-300 ">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lgl:grid-cols-4 items-start  px-6 gap-10 lgl:gap-4">
            {middleList.map((el) => (
              <FooterMiddleList key={el._id} {...el} />
            ))}
          </div>
        </div>
      </div>
      {/* Top end here */}
      {/* Top Bottom start here */}
      <div className="w-full flex gap-14 items-center justify-center flex-wrap py-6">
        <div>
          <img
            className="w-20 pt-3 cursor-pointer hover:-translate-y-1 hover:hue-rotate-60 duration-200"
            src={logo}
            alt=""
          />
        </div>
        <div className="flex gap-4 flex-wrap justify-evenly">
          <div className="footerBottom">
            <p className="text-xs">
              English
            </p>
          </div>
          <div className="footerBottom">
            <p className="text-xs flex items-center"><span><AttachMoney/></span> USD - U.S. Dollar</p>
          </div>
          <div className="footerBottom gap-2">
            <img className="w-6 " src={bdFlag} alt="flagImg" />
            <p className="text-xs">Uzbekistan</p>
          </div>
        </div>
      </div>
      {/* Top Bottom end here */}
    </div>
  );
};

export default FooterMiddle;
