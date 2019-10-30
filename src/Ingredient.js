import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import useInputState from "./hooks/useInputState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import "./styles/view.css";

function Ingredient({ mode, ingredient, handleIngredientChange }) {
  // const [value, handleChange, reset] = useInputState(ingredient);

  const [value, setValue] = useState(ingredient);

  function handleChange(e) {
    setValue(e.target.value);
    handleIngredientChange(e.target.value);
  }

  return mode === "view" ? (
    <div className="view-ingredient-item">
      <p>{ingredient}</p>
      <FontAwesomeIcon
        icon={faPlusCircle}
        className="view-ingredient-item-add-btn "
      />
    </div>
  ) : (
    <div className="view-ingredient-item">
      <InputGroup size="sm" className="mb-3" style={{ width: "90%" }}>
        <FormControl
          aria-label=""
          aria-describedby=""
          value={value}
          onChange={handleChange}
        />
      </InputGroup>
      <FontAwesomeIcon
        icon={faTrashAlt}
        className="view-ingredient-item-add-btn "
      />
    </div>
  );
}

export default Ingredient;
