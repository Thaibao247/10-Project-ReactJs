import React from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import { AiTwotoneDelete } from "react-icons/ai";
import "./Column.scss";
function Column(props) {
  const { item, index, columnId, handleDeleteItem } = props;
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className="todo-item"
            style={{
              userSelect: "none",
              padding: 16,
              margin: "0 0 8px 0",
              minHeight: "50px",
              backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86",
              color: "white",
              borderRadius: "10px",
              ...provided.draggableProps.style,
            }}
          >
            <p>{item.content}</p>
            <div className="edit-delete">
              <button
                className="btn-delete"
                onClick={() => {
                  handleDeleteItem(columnId, index);
                }}
              >
                <AiTwotoneDelete />
              </button>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
}
Column.propTypes = {
  itemL: PropTypes.object,
  index: PropTypes.number,
  columnId: PropTypes.array,
  handleDeleteItem: PropTypes.func,
};
Column.defaultProps = {
  item: {},
  index: null,
  columnId: [],
  handleDeleteItem: null,
};
export default Column;
