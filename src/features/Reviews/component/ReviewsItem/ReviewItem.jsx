import React from "react";
import PropTypes from "prop-types";
import people from "../../data";

function ReviewItem(props) {
  const { index, prevReview, nextReview, randomReview } = props;
  const { name, job, image, text } = people[index];

  return (
    <div className="review-item">
      <img src={image} alt="" />
      <h4 className="review-item__name">{name}</h4>
      <p className="review-item__job">{job}</p>
      <p className="review-item__info">{text}</p>
      <div className="btn-wrapper">
        <button onClick={prevReview}>prev</button>
        <button onClick={nextReview}>next</button>
      </div>
      <button className="random-review" onClick={randomReview}>
        Random
      </button>
    </div>
  );
}
ReviewItem.propTypes = {
  index: PropTypes.number,
  prevReview: PropTypes.func,
  nextReview: PropTypes.func,
  randomReview: PropTypes.func,
};
ReviewItem.defaultProps = {
  index: 0,
  prevReview: null,
  nextReview: null,
  randomReview: null,
};
export default ReviewItem;
