import React, { useState } from "react";
import BirthdayList from "./component/BirthdayList/BirthdayList";
import "./styles.scss";
import data from "./data";
function Birthday(props) {
  const [birthdayList, setBirthdayList] = useState(data);

  return (
    <div className="birthday">
      <div className="birthday-reminder">
        <p className="birthday-number">{birthdayList.length} birthdays today</p>
        <BirthdayList birthdayList={birthdayList} />
        <button
          onClick={() => {
            setBirthdayList([]);
          }}
        >
          Clear all
        </button>
      </div>
    </div>
  );
}

export default Birthday;
