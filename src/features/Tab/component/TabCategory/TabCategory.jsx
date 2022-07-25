import React from "react";
import PropTypes from "prop-types";
import "../../styles.scss";
function TabCategory(props) {
  const { tabs, handleClickGetTabId, tabByIndex } = props;
  return (
    <div className="tab__category">
      {tabs.map((item, index) => (
        <button
          className={`btn-category ${index === tabByIndex ? "job-active" : ""}`}
          onClick={() => {
            handleClickGetTabId(index);
          }}
        >
          {item.company}
        </button>
      ))}
    </div>
  );
}

TabCategory.propTypes = {
  tabs: PropTypes.array,
  handleClickGetTabId: PropTypes.func,
  tabByIndex: PropTypes.number,
};
TabCategory.defaultProps = {
  tabs: [],
  handleClickGetTabId: null,
  tabByIndex: 0,
};
export default TabCategory;
