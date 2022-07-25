import React, { useState } from "react";
import { useEffect } from "react";
import GroceryForm from "./component/GroceryForm/GroceryForm";
import GroceryList from "./component/GroceryList/GroceryList";
import "./styles.scss";
function GroceryBud(props) {
  //LocalStorage
  const dataGrocery = JSON.parse(localStorage.getItem("data-grocery"));
  //**
  const [listGro, setListGro] = useState(dataGrocery ? dataGrocery : []);
  const [alertAdd, setAlertAdd] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [indexItem, setIndexItem] = useState(0);
  const [valueEdit, setValueEdit] = useState("");
  const handleClickAddGro = (gros) => {
    const newListGro = [...listGro, gros];
    setListGro(newListGro);
    setAlertAdd(true);
  };
  const handleClickDeleteItem = (index) => {
    const newListGro = [...listGro].filter((x) => x !== listGro[index]);
    setListGro(newListGro);
    console.log(index);
  };
  const handleClickBtnEdit = (index, item) => {
    setEditItem(true);
    setIndexItem(index);
    setValueEdit(item);
  };
  const handleClickEditGro = (value) => {
    console.log(indexItem, value);
    setListGro(
      listGro.length > 0 &&
        listGro.map((item) => {
          if (item === listGro[indexItem]) {
            return value;
          }
          return item;
        })
    );
    setEditItem(false);
  };
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlertAdd(false);
    }, 1500);
    return () => clearTimeout(timeOut);
  });

  useEffect(() => {
    localStorage.setItem("data-grocery", JSON.stringify(listGro));
  }, [listGro]);
  return (
    <section className="grocery-bud">
      <div className="grocery-wrapper">
        {alertAdd ? (
          <div className="alert-add">Item Added To The List</div>
        ) : null}
        <h2 className="title">Grocery Bud</h2>
        <GroceryForm
          handleClickEditGro={handleClickEditGro}
          onClickAddGro={handleClickAddGro}
          editItem={editItem}
          valueEdit={valueEdit}
        />
        <GroceryList
          onDeleteItem={handleClickDeleteItem}
          handleClickBtnEdit={handleClickBtnEdit}
          listGro={listGro}
        />
        {listGro.length > 0 && (
          <p
            className="clear-all"
            onClick={() => {
              setListGro([]);
            }}
          >
            Clear All Items
          </p>
        )}
      </div>
    </section>
  );
}

export default GroceryBud;
