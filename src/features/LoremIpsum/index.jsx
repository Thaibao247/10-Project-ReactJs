import React, { useState } from "react";
import Paragraphs from "./component/Paragraphs/Paragraphs";
import "./styles.scss";
import data from "./data";
function LoremIpsum(props) {
  const [value, setValue] = useState("");
  const [paragraph, setParagraph] = useState(data);
  const handleOnchange = (e) => {
    setValue(e.target.value);
  };
  const handleClickToGenerate = (e) => {
    e.preventDefault();
    const newParagraph = [];
    let n = value;
    if (n < 0) {
      n = 1;
    }
    if (n > data.length) {
      n = data.length - 1;
    }

    for (let i = 0; i < n; i++) {
      newParagraph.push(data[i]);
    }
    setParagraph(newParagraph);
  };
  console.log(paragraph);
  return (
    <section className="lorem">
      <h1 className="title">Tired of boring lorem ipsum</h1>
      <div className="form-lorem">
        <form action="">
          <label htmlFor="" className="label-lorem">
            Paragraphs:
          </label>
          <input
            className="input-lorem"
            type="text"
            value={value}
            onChange={handleOnchange}
          />
          <button onClick={handleClickToGenerate} className="btn-generate">
            Generate
          </button>
        </form>
      </div>
      <br />
      <hr />
      <Paragraphs paragraph={paragraph} />
    </section>
  );
}

export default LoremIpsum;
