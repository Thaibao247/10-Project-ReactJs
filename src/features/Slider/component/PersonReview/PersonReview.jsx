import React from "react";
import PropTypes from "prop-types";
import { FaQuoteLeft } from "react-icons/fa";
import "../../styles.scss";
function PersonReview(props) {
  const { person, index, personIndex, checkSlide } = props;
  const { id, image, name, title, quote } = person;
  //let position = "nextSlide";
  let position = checkSlide(personIndex, index);
  return (
    <div key={id} className={`person ${position}`}>
      <img className="person__img" src={image} alt={name} />
      <h4 className="person__name">{name}</h4>
      <p className="person_title">{title}</p>
      <p className="person__text">{quote}</p>
      <FaQuoteLeft className="icon-quote" />
    </div>
  );
}

PersonReview.propTypes = {
  person: PropTypes.object,
  index: PropTypes.number,
  personIndex: PropTypes.number,
};
PersonReview.defaultProps = {
  person: {},
  index: 0,
  personIndex: 0,
};
export default PersonReview;
