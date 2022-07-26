import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "../../styles.scss";

function TodoForm(props) {
  const { onClickAddTodo } = props;
  const [value, setValue] = useState("");
  const refGro = useRef();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (onClickAddTodo) {
      onClickAddTodo(value);
    }
    setValue("");
  };

  useEffect(() => {
    refGro.current.focus();
  });

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmitForm}>
        <input
          type="text"
          placeholder="e.g. eggs"
          className={"input-todo"}
          value={value}
          ref={refGro}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn-submit">Submit</button>
      </form>
    </div>
  );
}
TodoForm.propTypes = {
  onClickAddTodo: PropTypes.func,
};
TodoForm.defaultProps = {
  onClickAddTodo: null,
};
export default TodoForm;
