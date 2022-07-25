import React from "react";
import PropTypes from "prop-types";
import "../../styles.scss";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
function GroceryList(props) {
  const { listGro, onDeleteItem, handleClickBtnEdit } = props;

  const handleDeleteItem = (index) => {
    if (!onDeleteItem) return;
    onDeleteItem(index);
  };

  return (
    <div className="list-gro">
      {listGro.length > 0 &&
        listGro.map((item, index) => (
          <div key={index} className="item-gro">
            <p>{item}</p>
            <div className="edit-delete">
              <button
                className="btn-edit"
                onClick={() => {
                  handleClickBtnEdit && handleClickBtnEdit(index, item);
                }}
              >
                <BiEdit />
              </button>
              <button
                className="btn-delete"
                onClick={() => {
                  handleDeleteItem(index);
                }}
              >
                <AiTwotoneDelete />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
GroceryList.propTypes = {
  listGro: PropTypes.array,
  onDeleteItem: PropTypes.func,
  handleClickBtnEdit: PropTypes.func,
};
GroceryList.defaultProps = {
  listGro: [],
  onDeleteItem: null,
  handleClickBtnEdit: null,
};
export default GroceryList;
