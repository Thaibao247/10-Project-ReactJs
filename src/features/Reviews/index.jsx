import React, { useState } from "react";
import ReviewItem from "./component/ReviewsItem/ReviewItem";
import "./styles.scss";
import people from "./data";

function Reviews(props) {
  const [index, setIndex] = useState(1);
  //   console.log(people[index]);
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextReview = () => {
    const newIndex = index + 1;
    setIndex(checkNumber(newIndex));
  };
  const prevReview = () => {
    const newIndex = index - 1;
    setIndex(checkNumber(newIndex));
  };
  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (checkNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(randomNumber);
  };
  return (
    <div className="reviews">
      <h1 className="title">Our Reviews</h1>
      <ReviewItem
        index={index}
        nextReview={nextReview}
        prevReview={prevReview}
        randomReview={randomReview}
      />
    </div>
  );
}

export default Reviews;
