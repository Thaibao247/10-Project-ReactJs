import React from "react";
import PropTypes from "prop-types";
import "./birthdayItem.scss";
function BirthdayItem(props) {
  const { people } = props;
  return (
    <article key={people.id} className="birthday-item">
      <img src={people.image} alt="" />
      <div className="people-info">
        <h4>{people.name}</h4>
        <p>{people.age} years</p>
      </div>
    </article>
  );
}
BirthdayItem.propTypes = {
  people: PropTypes.object,
};
BirthdayItem.defaultProps = {
  people: {},
};

export default BirthdayItem;
