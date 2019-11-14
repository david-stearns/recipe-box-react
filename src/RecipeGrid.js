import React, { useContext } from "react";
import RecipeCard from "./RecipeCard";
import { RecipeContext } from "./contexts/RecipeContext";
import "./styles/RecipeList.css";

function RecipeGrid({ expandMenu, expandList, recipes }) {
  const { addRecipeIngredients } = useContext(RecipeContext);

  let classes = "body-container RecipeList";
  if (expandMenu) classes += " nav-open";
  if (expandList) classes += " shopping-list-open";

  const allRecipes = recipes.map(recipe => {
    return (
      <RecipeCard
        recipe={recipe}
        addRecipeIngredients={addRecipeIngredients}
        key={recipe.id}
      />
    );
  });

  return (
    <>
      {allRecipes.length > 0 ? (
        <div className={classes}>{allRecipes}</div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
            fontStyle: "italic"
          }}
        >
          <h5>no results found</h5>
        </div>
      )}
    </>
  );
}

export default RecipeGrid;
