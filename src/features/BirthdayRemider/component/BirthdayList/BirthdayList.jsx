import React from "react";
import PropTypes from "prop-types";
import BirthdayItem from "../BirthdayItem/BirthdayItem";
import "./BirthdayList.scss";
function BirthdayList(props) {
  const { birthdayList } = props;
  return (
    <div className="birthday-list">
      {birthdayList.map((people) => (
        <BirthdayItem people={people} />
      ))}
    </div>
  );
}

BirthdayList.propTypes = {
  BirthdayList: PropTypes.array,
};
BirthdayList.defaultProps = {
  BirthdayList: [],
};

export default BirthdayList;
