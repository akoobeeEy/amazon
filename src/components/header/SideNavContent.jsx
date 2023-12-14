import { KeyboardArrowRight } from "@mui/icons-material";
import { PropTypes } from "prop-types";
const SideNavContent = ({ title, one, two, three, four }) => {
  return (
    <div className="py-3 border-b-[1px] border-b-gray-300">
      <h3 className="text-lg font-titleFont font-semibold mb-1 px-6">
        {title}
      </h3>
      <ul>
        <li className="sideNavLink group">
          {one}
          <KeyboardArrowRight className="text-gray-400 group-hover:text-black duration-150 " />
        </li>
        <li className="sideNavLink group">
          {two}
          <KeyboardArrowRight className="text-gray-400 group-hover:text-black duration-150 " />
        </li>
        <li className="sideNavLink group">
          {three}
          <KeyboardArrowRight className="text-gray-400 group-hover:text-black duration-150 " />
        </li>
        {four && four.length > 0 ? (
          <li className="sideNavLink group">
            {four}
            <KeyboardArrowRight className="text-gray-400 group-hover:text-black duration-150" />
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};
SideNavContent.propTypes = {
  title: PropTypes.string,
  one: PropTypes.string,
  two: PropTypes.string,
  three: PropTypes.string,
  four: PropTypes.string,
};
export default SideNavContent;
