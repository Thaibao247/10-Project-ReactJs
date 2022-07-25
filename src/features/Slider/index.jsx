import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import PersonReview from "./component/PersonReview/PersonReview";
import "./styles.scss";
import data from "./data";
function Slider(props) {
  const [people, setPeople] = useState(data);
  const [personIndex, setPersonIndex] = useState(0);
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (personIndex < 0) {
      setPersonIndex(lastIndex);
    }
    if (personIndex > lastIndex) {
      setPersonIndex(0);
    }
  }, [personIndex, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setPersonIndex(personIndex + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [personIndex]);

  const checkSlide = (index, psIndex) => {
    if (psIndex === index) {
      return "activeSlide";
    }
    if (
      psIndex === index - 1 ||
      (index === 0 && psIndex === people.length - 1)
    ) {
      return "lastSlide";
    }
    return "nextSlide";
  };
  return (
    <section className="section">
      <h2 className="title">Slider Project</h2>
      <div className="section__center">
        {people.map((person, index) => (
          <PersonReview
            person={person}
            index={index}
            personIndex={personIndex}
            checkSlide={checkSlide}
          />
        ))}
        <button
          className="prev"
          onClick={() => {
            setPersonIndex(personIndex - 1);
          }}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => {
            setPersonIndex(personIndex + 1);
          }}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Slider;
