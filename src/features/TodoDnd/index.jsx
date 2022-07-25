import React from "react";
import { useState } from "react";
import data from "./data";
import { Droppable } from "react-beautiful-dnd";
function TodoDnd(props) {
  return (
    <Droppable droppableId="drop-list">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={{
            backgroundColor: snapshot.isDraggingOver ? "red" : "green",
          }}
        >
          <h2>I am a droppable!</h2>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default TodoDnd;
