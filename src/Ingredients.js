import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import "./styles/view.css";

export default function Ingredients({
  mode,
  recipe,
  setIngredientsEdit,
  ingredients
}) {
  function handleChange(id, e) {
    console.log(e.target.value);
    const updatedIngredients = ingredients.map(ingredient => {
      return ingredient.id !== id
        ? ingredient
        : { ingredient: e.target.value, id: ingredient.id };
    });

    setIngredientsEdit(updatedIngredients);
  }

  const allIngredients = ingredients.map(ingredient => {
    return mode === "view" ? (
      <div className="view-ingredient-item">
        <p>{ingredient.ingredient}</p>
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
            value={ingredient.ingredient}
            onChange={e => handleChange(ingredient.id, e)}
          />
        </InputGroup>
        <FontAwesomeIcon
          icon={faTrashAlt}
          className="view-ingredient-item-add-btn "
        />
      </div>
    );
  });

  return <p>{allIngredients}</p>;
}
