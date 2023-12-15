import { PropTypes } from "prop-types";

const FooterMiddleList = ({ title, listItem }) => {
  return (
    <div>
      <h3 className="font-titleFont text-white text-base font-semibold mb-3">
        {title}
      </h3>
      <ul className="flex flex-col gap-2 font-bodyFont">
        {listItem.map((item) =>
          item.listData.map((data) => (
            <li key={data} className="footerLink">
              {data}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

FooterMiddleList.propTypes = {
  title: PropTypes.string,
  listItem: PropTypes.array,
};

export default FooterMiddleList;
