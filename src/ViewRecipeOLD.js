import React, { useState, useEffect } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import useInputState from "./hooks/useInputState";
import Ingredient from "./Ingredient";
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
  const [title, handleTitleChange] = useInputState(recipe.title);
  const [summary, handleSummaryChange] = useInputState(recipe.summary);
  const [body, handleBodyChange] = useInputState(recipe.body);
  const [ingredients, handleIngredientsChange] = useInputState(
    recipe.ingredients
  );
  const stars = getStars(recipe.rating);

  const [editModeRecipe, setEditModeRecipe] = useState(recipe);

  function handleEditClick() {
    setMode("edit");
  }

  function handleEditComplete(saveChange) {
    console.log(saveChange);
    if (saveChange === true) {
      saveChanges();
    }
    setMode("view");
  }

  function saveChanges() {
    setEditModeRecipe({ ...editModeRecipe, title, summary, ingredients, body });
  }

  useEffect(() => {
    // console.log(editModeRecipe);
    updateRecipe(editModeRecipe);
  }, [editModeRecipe]);

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

  const allIngredients = recipe.ingredients.map(ingredient => {
    return <Ingredient ingredient={ingredient} mode={mode} />;
  });

  const recipeTitle =
    mode === "view" ? (
      <h3>{title}</h3>
    ) : (
      <InputGroup size="sm" className="mb-3">
        <FormControl
          aria-label=""
          aria-describedby=""
          value={title}
          onChange={handleTitleChange}
          // value={editModeRecipe.title}
          // onChange={setEditModeRecipe}
          style={{ fontSize: "28px" }}
        />
      </InputGroup>
    );

  const recipeSummary =
    mode === "view" ? (
      <p>{summary}</p>
    ) : (
      <InputGroup size="sm" className="mb-3">
        <FormControl
          as="textarea"
          aria-label=""
          aria-describedby=""
          value={summary}
          onChange={handleSummaryChange}
          style={{ height: "300px" }}
        />
      </InputGroup>
    );

  const recipeBody =
    mode === "view" ? (
      <p>{body}</p>
    ) : (
      <InputGroup size="sm" className="mb-3">
        <FormControl
          as="textarea"
          aria-label=""
          aria-describedby=""
          value={body}
          onChange={handleBodyChange}
        />
      </InputGroup>
    );

  const recipeImageURL = mode === "edit" && (
    <InputGroup size="sm" className="mb-3" style={{ marginTop: "12px" }}>
      <FormControl
        aria-label=""
        aria-describedby=""
        placeholder="Image URL"
        value={""}
        onChange={""}
      />
    </InputGroup>
  );

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
              {/* <h3>{recipe.title}</h3> */}
              {recipeTitle}
              <h5>{stars}</h5>
              {/* <p>{recipe.summary}</p> */}
              {recipeSummary}
            </div>
            <div
              className="view-img"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Image
                src={`/${recipe.image}`}
                className="view-img"
                style={{ width: "100%" }}
              />
              {recipeImageURL}
            </div>
          </div>
          <div className="divider"></div>
          <div className="view-body">
            {/* <ViewIngredients ingredients={recipe.ingredients} mode={mode} /> */}
            <div className="view-ingredients">
              <h5>Ingredients</h5>
              <div>{allIngredients}</div>
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
              {/* <p>{recipe.body}</p> */}
              {recipeBody}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewRecipe;
