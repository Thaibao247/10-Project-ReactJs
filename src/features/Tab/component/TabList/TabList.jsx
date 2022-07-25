import React from "react";
import PropTypes from "prop-types";
import "../../styles.scss";
function TabList(props) {
  const { listTabById } = props;
  const { title, dates, duties, company } = listTabById;
  return (
    <div className="tab__job">
      <h2 className="job-title">{title} </h2>
      <p className="job-company">{company}</p>
      <p className="job-date">{dates}</p>
      <div className="job-info">
        {duties.map((item) => (
          <p>+{item}</p>
        ))}
      </div>
      <div className="more-info">
        <button className="btn-more">More-info</button>
      </div>
    </div>
  );
}
TabList.propTypes = {
  listTabById: PropTypes.object,
};
TabList.defaultProps = {
  listTabById: {},
};
export default TabList;
