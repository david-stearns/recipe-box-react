import React, { useState } from "react";
import Ingredients from "./Ingredients";
import TitleBar from "./TitleBar";
import EditStars from "./EditStars";
import useToggle from "./hooks/useToggle";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
// import uuid from "uuidv4";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
// import { getStars } from "./helpers.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import "./styles/view.css";

function ViewRecipe({ recipe, history, updateRecipe, addSingleIngredient }) {
  const [mode, setMode] = useState("view");
  const [recipeView, setRecipeView] = useState(recipe);
  const [recipeEdit, setRecipeEdit] = useState(recipe);
  // const viewStars = getStars(recipe.rating);
  const [showAddToast, setShowAddToast] = useToggle(false);

  function handleEditClick() {
    setMode("edit");
  }

  function handleEditComplete(saveChange) {
    if (saveChange) {
      setRecipeView(recipeEdit);
      updateRecipe(recipeEdit);
    }
    setMode("view");
  }

  function handleChange(e) {
    setRecipeEdit({ ...recipeEdit, [e.target.name]: e.target.value });
  }

  function updateEditRating(rating) {
    setRecipeEdit({ ...recipeEdit, rating });
  }

  function updateIngredients(index, ingredient) {
    let newIngredients = recipeEdit.ingredients;
    newIngredients[index] = ingredient;
    setRecipeEdit({ ...recipeEdit, ingredients: newIngredients });
  }

  function addIngredient() {
    let newIngredients = recipeEdit.ingredients;
    newIngredients.push("");
    setRecipeEdit({ ...recipeEdit, ingredients: newIngredients });
  }

  function deleteIngredient(index) {
    console.log("delete", index);
    let newIngredients = recipeEdit.ingredients;
    newIngredients.splice(index, 1);
    setRecipeEdit({ ...recipeEdit, ingredients: newIngredients });
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
              {/* <h5>{viewStars}</h5> */}
              <EditStars
                mode={mode}
                rating={recipe.rating}
                updateEditRating={updateEditRating}
              />
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
              <Ingredients
                recipe={recipeEdit}
                mode={mode}
                updateIngredients={updateIngredients}
                deleteIngredient={deleteIngredient}
                addSingleIngredient={addSingleIngredient}
                showToast={setShowAddToast}
              />
              {mode === "edit" && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="outline-dark"
                    size="sm"
                    onClick={addIngredient}
                  >
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
        <Toast
          show={showAddToast}
          onClose={setShowAddToast}
          className="add-toast"
          delay={1500}
          autohide
        >
          <Toast.Body>Added to List!</Toast.Body>
        </Toast>
      </div>
    </>
  );
}

export default ViewRecipe;
