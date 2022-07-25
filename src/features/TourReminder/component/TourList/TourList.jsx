import React from "react";
import PropTypes from "prop-types";
import TourItem from "../TourItem/TourItem";
import "../../styles.scss";
function TourList(props) {
  const { tours, onClickRemove, onClickRefreshTours } = props;
  const handleRefreshTours = () => {
    if (!onClickRefreshTours) return;
    onClickRefreshTours();
  };
  return (
    <div className="tours__list">
      {tours.length > 0 ? (
        tours.map((tour) => (
          <TourItem tour={tour} onClickRemove={onClickRemove} />
        ))
      ) : (
        <>
          <div className="tour-refresh">
            <button onClick={() => handleRefreshTours()}>Refresh</button>
          </div>
        </>
      )}
    </div>
  );
}

TourList.propTypes = {
  tours: PropTypes.array,
  onClickRemove: PropTypes.func,
  onClickRefreshTours: PropTypes.func,
};
TourList.defaultProps = {
  tours: [],
  onClickRemove: null,
  onClickRefreshTours: null,
};
export default TourList;
