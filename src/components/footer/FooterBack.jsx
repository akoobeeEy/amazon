import { Link } from "react-router-dom";

const FooterBack = () => {
  return (
    <div className="bg-[#37475A] py-4 hover:bg-opacity-95 duration-150">
      <div
        className="flex justify-center"
      >
        <Link className="text-white font-semibold font-bodyFont text-xs" to={"/"}>Back To Top</Link>
      </div>
    </div>
  );
};

export default FooterBack;
