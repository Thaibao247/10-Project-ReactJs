import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

function AccordionItem(props) {
  const { question } = props;
  const { title, info } = question;
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="question-item">
      <div className="question-item__title">
        <h4>{title}</h4>
        <button onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? "-" : "+"}
        </button>
      </div>
      {showAnswer && <p>{info}</p>}
    </div>
  );
}
AccordionItem.propTypes = {
  question: PropTypes.object,
};
AccordionItem.defaultProps = {
  question: {},
};
export default AccordionItem;
