import React, { useState } from "react";
import TitleBar from "./TitleBar";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { getStars } from "./helpers.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import "./styles/view.css";

function ViewRecipe({ recipe, history }) {
  const [mode, setMode] = useState("view");

  const allIngredients = recipe.ingredients.map((ingredient, index) => {
    return <p style={{ width: "100%" }}>{ingredient}</p>;
  });

  const stars = getStars(recipe.rating);

  function handleEditClick() {
    setMode("edit");
  }

  function handleEditComplete() {
    setMode("view");
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
            onClick={handleEditComplete}
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
            onClick={handleEditComplete}
          >
            <FontAwesomeIcon
              icon={faCheckSquare}
              style={{ color: "green", fontSize: "14pt" }}
            />
          </Button>
        </>
      ));

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
              <h3>{recipe.title}</h3>
              <h5>{stars}</h5>
              <p>{recipe.summary}</p>
            </div>

            <Image src={`/${recipe.image}`} className="view-img" />
          </div>
          <div className="divider"></div>
          <div className="view-body">
            <div className="view-ingredients">
              <h5>Ingredients</h5>
              <div>{allIngredients}</div>
            </div>
            <div className="view-instructions">
              <h5>Preperation</h5>
              <p>{recipe.body}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewRecipe;
