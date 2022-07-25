import React from "react";
import AccordionItem from "./component/AccordionItem/AccordionItem";
import accordion from "./data";
import "./styles.scss";
function Accordion(props) {
  return (
    <div className="accordion">
      <h1>Questions And Answer About Login</h1>
      <div className="question-wrapper">
        {accordion.map((question) => (
          <AccordionItem question={question} />
        ))}
      </div>
    </div>
  );
}

export default Accordion;
