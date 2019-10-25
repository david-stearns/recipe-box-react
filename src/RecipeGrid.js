import React from "react";
import RecipeCard from "./RecipeCard";
import "./styles/RecipeList.css";

function RecipeGrid({
  addRecipeIngredients,
  expandMenu,
  expandList,
  recipes,
  history
}) {
  let classes = "body-container RecipeList";
  if (expandMenu) classes += " nav-open";
  if (expandList) classes += " shopping-list-open";

  const allRecipes = recipes.map(recipe => {
    return (
      <RecipeCard
        recipe={recipe}
        addRecipeIngredients={addRecipeIngredients}
        history={history}
        key={recipe.id}
      />
    );
  });

  return <div className={classes}>{allRecipes}</div>;
}

export default RecipeGrid;
