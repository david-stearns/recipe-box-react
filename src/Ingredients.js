import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
// import Toast from "react-bootstrap/Toast";
// import useToggle from "./hooks/useToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import "./styles/view.css";

export default function Ingredients({
  mode,
  recipe,
  updateIngredients,
  addIngredient,
  deleteIngredient,
  addSingleIngredient,
  showToast
}) {
  function handleChange(index, e) {
    updateIngredients(index, e.target.value);
  }

  function handleAddToList(ingredient) {
    addSingleIngredient(ingredient);
    showToast();
  }

  // const [showAddToast, setShowAddToast] = useToggle(false);

  const allIngredients = recipe.ingredients.map((ingredient, index) => {
    return mode === "view" ? (
      <div className="view-ingredient-item">
        <p>{ingredient}</p>
        <FontAwesomeIcon
          icon={faPlusCircle}
          className="view-ingredient-item-add-btn "
          onClick={() => handleAddToList(ingredient)}
          // onClick={setShowAddToast}
        />
      </div>
    ) : (
      <div className="view-ingredient-item">
        <InputGroup size="sm" className="mb-3" style={{ width: "90%" }}>
          <FormControl
            aria-label=""
            aria-describedby=""
            value={ingredient}
            onChange={e => handleChange(index, e)}
          />
        </InputGroup>
        <FontAwesomeIcon
          icon={faTrashAlt}
          className="view-ingredient-item-add-btn "
          onClick={() => deleteIngredient(index)}
        />
      </div>
    );
  });

  return <p>{allIngredients}</p>;
}
