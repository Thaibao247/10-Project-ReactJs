import React, { useState } from "react";
import "./styles.scss";
import Values from "values.js";
import SingleColor from "./component/SingleColor/SingleColor";

function ColorGenerate(props) {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [listColor, setListColor] = useState(new Values("#f15025").all(10));
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const newColors = new Values(color).all(10);
      setListColor(newColors);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <section className="color-generate">
      <h3 className="title"> Color Generate</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={color}
          className={`input-color ${error ? "error" : null}`}
          onChange={(e) => {
            setColor(e.target.value);
          }}
          placeholder="#f15025"
        />
        <button type="submit" className="btn-generate">
          Submit
        </button>
      </form>
      <div className="list-color">
        {listColor.map((item, index) => (
          <SingleColor color={item} index={index} hexColor={item.hex} />
        ))}
      </div>
    </section>
  );
}

export default ColorGenerate;
