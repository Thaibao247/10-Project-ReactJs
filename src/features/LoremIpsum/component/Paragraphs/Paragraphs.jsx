import React from "react";
import PropTypes from "prop-types";

Paragraphs.propTypes = {};

function Paragraphs(props) {
  const { paragraph } = props;
  return (
    <div>
      <h2>Paragraph</h2>
      {paragraph.map((para) => (
        <li>{para}</li>
      ))}
    </div>
  );
}

export default Paragraphs;
