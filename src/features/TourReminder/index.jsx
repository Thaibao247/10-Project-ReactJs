import React, { useState, useEffect } from "react";
import tourApi from "../../api/tourApi";
import TourList from "./component/TourList/TourList";
import "./styles.scss";
function TourReminder(props) {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTourApi = async () => {
    setLoading(true);
    try {
      const res = await tourApi.getAll({});
      if (res) {
        setTours(res);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTourApi();
  }, []);

  const handleClickRemoveTour = (value) => {
    if (value) {
      const newTours = [...tours].filter((item) => item.id !== value);
      setTours(newTours);
    }
  };
  const handleRefreshTours = () => {
    fetchTourApi();
  };
  if (loading) {
    return <h1>LOADING...</h1>;
  } else {
    return (
      <div className="tours">
        <h1 className="title">Our Tours</h1>
        <TourList
          tours={tours}
          onClickRemove={handleClickRemoveTour}
          onClickRefreshTours={handleRefreshTours}
        />
      </div>
    );
  }
}

export default TourReminder;
