import { Fragment } from "react";
import { PropTypes } from "prop-types";
const Button = ({ children }) => {
  return (
    <Fragment>
      <button
        className="w-full bg-yellow-300 rounded-md py-1 
      font-bold cursor-pointer hover:bg-yellow-400 active:bg-yellow-500 text-sm border-[1px] border-yellow-600 "
      >
        {children}
      </button>
    </Fragment>
  );
};
Button.propTypes = {
  children: PropTypes.string,
};
export default Button;
