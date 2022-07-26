import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import Column from "./component/Column/Column";
import TodoForm from "./component/TodoForm/TodoForm";

// const itemsTodo = [
//   { id: uuidv4(), content: "task1" },
//   { id: uuidv4(), content: "task2" },
//   { id: uuidv4(), content: "task3" },
// ];

function TodoDnd(props) {
  const dataTodo = JSON.parse(localStorage.getItem("data-todo"));
  const columnsTodo = {
    [uuidv4()]: {
      name: "Todo",
      items: [],
    },
    [uuidv4()]: {
      name: "Doing",
      items: [],
    },
    [uuidv4()]: {
      name: "Completed",
      items: [],
    },
    [uuidv4()]: {
      name: "Used Do",
      items: [],
    },
  };
  const [columns, setColumns] = useState(dataTodo ? dataTodo : columnsTodo);

  useEffect(() => {
    localStorage.setItem("data-todo", JSON.stringify(columns));
  }, [columns]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  const handleAddTodo = (value) => {
    const newTodo = {
      id: uuidv4(),
      content: value,
    };
    Object.entries(columns).map(([id, column]) => {
      if (column.name === "Todo") {
        setColumns({
          ...columns,
          [id]: {
            ...column,
            items: [...column.items, newTodo],
          },
        });
      }
    });
  };

  const handleDeleteItem = (columnId, index) => {
    const column = columns[columnId];
    setColumns({
      ...columns,
      [columnId]: {
        ...column,
        items: [...column.items].filter((x) => x !== column.items[index]),
      },
    });
  };
  return (
    <section className="todo">
      <TodoForm onClickAddTodo={handleAddTodo} />
      <div className="todo-dnd">
        <DragDropContext onDragEnd={(result) => handleOnDragEnd(result)}>
          {Object.entries(columns).map(([id, column]) => {
            return (
              <div className="dnd-wrapper">
                <h2 className="dnd-wrapper__title">{column.name}</h2>
                <div className="dnd-wrapper__item">
                  <Droppable droppableId={id} key={id}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          className="column"
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "lightgrey",

                            minHeight: 100,
                          }}
                        >
                          {column.items.length > 0 &&
                            column.items.map((item, index) => {
                              return (
                                <Column
                                  key={item.id}
                                  item={item}
                                  index={index}
                                  columnId={id}
                                  handleDeleteItem={handleDeleteItem}
                                />
                              );
                            })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </section>
  );
}

export default TodoDnd;
