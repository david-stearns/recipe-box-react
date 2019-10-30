import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import useInputState from "./hooks/useInputState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./styles/view.css";

function ViewIngredients({ ingredients, mode }) {
  // const [value, handleChange, reset] = useInputState(task);

  // const [value, handleChange, reset] = useInputState(ingredients);

  const [value, setValue] = useState(ingredients);
  const handleChange = index => e => {
    console.log(e.target);
    console.log(index);
    // setValue(e.target.value);
  };

  console.log(value);
  const allIngredients = value.map((ingredient, index) => {
    return mode === "view" ? (
      <div className="view-ingredient-item">
        <p>{ingredient}</p>
        <FontAwesomeIcon
          icon={faPlusCircle}
          className="view-ingredient-item-add-btn "
        />
      </div>
    ) : (
      <div>
        <InputGroup size="sm" className="mb-3">
          <FormControl
            aria-label=""
            aria-describedby=""
            value={value[index]}
            onChange={handleChange(index)}
          />
        </InputGroup>
      </div>
    );
  });
  return (
    <div className="view-ingredients">
      <h5>Ingredients</h5>
      <div>{allIngredients}</div>
      {mode === "edit" && <p>add</p>}
    </div>
  );
}

export default ViewIngredients;
