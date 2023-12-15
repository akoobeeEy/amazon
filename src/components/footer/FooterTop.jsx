import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const FooterTop = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white py-6">
      <div className="w-full border-t-[1px] border-b-[1px] py-8">
        <div className="w-64 mx-auto text-center flex flex-col gap-1">
          <p className="text-sm">See personalized recommendations</p>
          <Button navigate={navigate}>Sign in</Button>
          <p className="text-xs mt-1">
            New customer?{" "}
            <span className="cursor-pointer text-blue-600 ml-1">
              Start here.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
