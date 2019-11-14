import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { getStars } from "./helpers.js";
import { Redirect } from "react-router-dom";

function RecipeCard({ recipe, addRecipeIngredients }) {
  const { title, image, rating, id, summary } = recipe;

  const stars = getStars(rating);
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Redirect to={`/recipe/${id}`} />;
  }

  return (
    <div className="card-container">
      <Card className="card">
        <Card.Img
          variant="top"
          src={image}
          onClick={() => setRedirect(true)}
          style={{
            width: "100%",
            height: "60%",
            objectFit: "cover",
            maxHeight: "244.8px",
            cursor: "pointer"
          }}
        />
        <Card.Body>
          <Card.Title
            onClick={() => setRedirect(true)}
            style={{ cursor: "pointer" }}
          >
            {title}
          </Card.Title>

          <Card.Text style={{ fontSize: "14px", overflow: "hidden" }}>
            {summary}
          </Card.Text>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <h5 style={{ margin: "0", padding: "6px 0px" }}>{stars}</h5>

            <Button
              variant="light"
              style={{ fontFamily: "Pacifico, cursive", margin: "0px" }}
              onClick={() => addRecipeIngredients(id)}
            >
              + add to list
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RecipeCard;
