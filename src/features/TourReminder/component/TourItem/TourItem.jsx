import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles.scss";

function TourItem(props) {
  const { tour, onClickRemove } = props;
  const [readMore, setReadMore] = useState(true);
  return (
    <div className="tours-item">
      <img src={tour.image} alt="" />
      <div className="tour-info">
        <div className="tour-info__title">
          <h4>{tour.name}</h4>
          <p>{tour.price}</p>
        </div>
        <div className="tour-info__des">
          <p>
            {readMore ? `${tour.info.substring(0, 200)}...` : tour.info}{" "}
            <span onClick={() => setReadMore(!readMore)}>
              {readMore ? "Read More" : "Show Less"}
            </span>
          </p>
        </div>
        <div className="tour-info__remove">
          <button onClick={() => onClickRemove(tour.id)}>Not Interested</button>
        </div>
      </div>
    </div>
  );
}
TourItem.propTypes = {
  tour: PropTypes.object,
  onClickRemove: PropTypes.func,
};
TourItem.defaultProps = {
  tour: {},
  onClickRemove: null,
};
export default TourItem;
