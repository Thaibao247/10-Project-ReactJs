import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "../../styles.scss";

function GroceryForm(props) {
  const { onClickAddGro, editItem, handleClickEditGro, valueEdit } = props;
  const [value, setValue] = useState("");
  const refGro = useRef();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (onClickAddGro) {
      onClickAddGro(value);
    }
    setValue("");
  };
  const handleEditForm = (e) => {
    e.preventDefault();
    if (handleClickEditGro) {
      handleClickEditGro(value);
    }
    setValue("");
  };
  useEffect(() => {
    refGro.current.focus();
  });
  useEffect(() => {
    setValue(valueEdit);
  }, [valueEdit]);
  return (
    <div className="form-wrapper">
      <form
        className="form"
        onSubmit={editItem ? handleEditForm : handleSubmitForm}
      >
        <input
          type="text"
          placeholder="e.g. eggs"
          className={editItem ? "input-edit" : "input-submit"}
          value={value}
          ref={refGro}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn-submit">{editItem ? "Edit" : "Submit"}</button>
      </form>
    </div>
  );
}
GroceryForm.propTypes = {
  onClickAddGro: PropTypes.func,
  handleClickEditGro: PropTypes.func,
  valueEdit: PropTypes.string,
  editItem: PropTypes.bool,
};
GroceryForm.defaultProps = {
  onClickAddGro: null,
  handleClickEditGro: null,
  valueEdit: "",
  editItem: false,
};
export default GroceryForm;
