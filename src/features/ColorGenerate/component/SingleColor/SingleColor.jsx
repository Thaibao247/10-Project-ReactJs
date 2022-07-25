import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function SingleColor(props) {
  const { color, index, hexColor } = props;
  const { rgb, weight } = color;
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`;
  useEffect(() => {
    const alertValue = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(alertValue);
  }, [alert]);

  return (
    <div
      className={`color ${index > 10 ? "color-light" : null}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p>{weight}%</p>
      <p>{hexValue}</p>
      {alert && <p>Copied to clipboard!</p>}
    </div>
  );
}

SingleColor.propTypes = {
  color: PropTypes.object.isRequired,
  index: PropTypes.number,
};
SingleColor.defaultProps = {
  index: 0,
};
export default SingleColor;
