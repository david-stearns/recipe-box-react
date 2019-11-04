import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import uuid from "uuidv4";
// import Ingredient from "./Ingredient";
import Ingredients from "./Ingredients";
import TitleBar from "./TitleBar";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { getStars } from "./helpers.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import "./styles/view.css";

function ViewRecipe({ recipe, history, updateRecipe }) {
  const [mode, setMode] = useState("view");
  const [recipeView, setRecipeView] = useState(recipe);
  const [recipeEdit, setRecipeEdit] = useState(recipe);
  // const [ingredientsEdit, setIngredientsEdit] = useState(recipe.ingredients);
  const [ingredientsEdit, setIngredientsEdit] = useState(
    recipe.ingredients.map(ingredient => {
      return { ingredient: ingredient, id: uuid() };
    })
  );
  const stars = getStars(recipe.rating);

  function handleEditClick() {
    setMode("edit");
  }

  function handleEditComplete(saveChange) {
    if (saveChange) {
      let newIng = ingredientsEdit.map(ingredient => {
        return ingredient.ingredient;
      });

      setRecipeView({ ...recipeEdit, ingredients: newIng });
      updateRecipe({ ...recipeEdit, ingredients: newIng });
    }
    setMode("view");
  }

  function handleChange(e) {
    setRecipeEdit({ ...recipeEdit, [e.target.name]: e.target.value });
  }

  let editButtons = "";
  mode === "view"
    ? (editButtons = (
        <Button
          onClick={handleEditClick}
          variant="light"
          size="sm"
          style={{ width: "100%", borderRadius: "0.2rem 0.2rem 0px 0px" }}
        >
          <FontAwesomeIcon icon={faEdit} />
          &nbsp;&nbsp;Edit
        </Button>
      ))
    : (editButtons = (
        <>
          <Button
            variant="light"
            size="sm"
            style={{
              width: "50%",
              borderRadius: "0.2rem 0px 0px 0px"
            }}
            onClick={() => handleEditComplete(false)}
          >
            <FontAwesomeIcon
              icon={faWindowClose}
              style={{ color: "red", fontSize: "14pt" }}
            />
          </Button>
          <Button
            variant="light"
            size="sm"
            style={{ width: "50%", borderRadius: "0px 0.2rem 0px 0px" }}
            onClick={() => handleEditComplete(true)}
          >
            <FontAwesomeIcon
              icon={faCheckSquare}
              style={{ color: "green", fontSize: "14pt" }}
            />
          </Button>
        </>
      ));

  const recipeTitle =
    mode === "view" ? (
      <h3>{recipeView.title}</h3>
    ) : (
      <InputGroup size="sm" className="mb-3">
        <FormControl
          aria-label=""
          aria-describedby=""
          name="title"
          value={recipeEdit.title}
          onChange={handleChange}
          style={{ fontSize: "28px" }}
        />
      </InputGroup>
    );

  const recipeSummary =
    mode === "view" ? (
      <p>{recipeView.summary}</p>
    ) : (
      <InputGroup sytle={{ height: "100%" }} size="sm" className="mb-3">
        <FormControl
          as="textarea"
          aria-label=""
          aria-describedby=""
          name="summary"
          value={recipeEdit.summary}
          onChange={handleChange}
          style={{ minHeight: "300px" }}
        />
      </InputGroup>
    );

  const recipeBody =
    mode === "view" ? (
      <p>{recipeView.body}</p>
    ) : (
      <InputGroup size="sm" className="mb-3" style={{ height: "90%" }}>
        <FormControl
          as="textarea"
          aria-label=""
          aria-describedby=""
          name="body"
          value={recipeEdit.body}
          onChange={handleChange}
        />
      </InputGroup>
    );

  const recipeImageURL = mode === "edit" && (
    <InputGroup size="sm" className="mb-3" style={{ marginTop: "12px" }}>
      <InputGroup.Prepend>
        <InputGroup.Text>Image URL</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        aria-label=""
        aria-describedby=""
        placeholder="Image URL"
        name="image"
        value={recipeEdit.image}
        onChange={handleChange}
      />
    </InputGroup>
  );

  const image = mode === "view" ? recipeView.image : recipeEdit.image;
  return (
    <>
      <TitleBar history={history} view="view" />
      <div className="body-container">
        <div className="view-edit-button-container">
          <div className="view-edit-tab">{editButtons}</div>
        </div>

        <div className="view-container">
          <div className="view-header">
            <div className="view-title-card">
              {recipeTitle}
              <h5>{stars}</h5>
              {recipeSummary}
            </div>
            <div
              className="view-img"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Image
                src={`${image}`}
                className="view-img"
                style={{ width: "100%" }}
              />
              {recipeImageURL}
            </div>
          </div>
          <div className="divider"></div>
          <div className="view-body">
            <div className="view-ingredients">
              <h5>Ingredients</h5>
              {/* <div>{allIngredients}</div> */}
              <Ingredients
                recipe={recipeEdit}
                mode={mode}
                setIngredientsEdit={setIngredientsEdit}
                ingredients={ingredientsEdit}
              />
              {mode === "edit" && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button variant="outline-dark" size="sm">
                    add +
                  </Button>
                </div>
              )}
            </div>
            <div className="view-instructions">
              <h5>Preperation</h5>
              {recipeBody}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewRecipe;
