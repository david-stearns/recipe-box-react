import React, { useState } from "react";
import uuid from "uuidv4";
import useToggle from "./hooks/useToggle";
import TitleBar from "./TitleBar";
import SideDrawer from "./SideDrawer";
import RecipeGrid from "./RecipeGrid";
import { Recipe } from "./demo-data";

function RecipeBox({
  recipes,
  history,
  ingredients,
  removeIngredient,
  clearIngredients,
  addRecipeIngredients,
  setRecipes
}) {
  const [showList, setShowList] = useToggle(false);
  const [expandMenu, setExpandMenu] = useToggle(false);

  function createNewRecipe() {
    const newRecipeID = uuid();
    let newRecipe = new Recipe(newRecipeID);
    newRecipe.firstEdit = true;
    setRecipes([...recipes, newRecipe]);
    history.push(`/recipe/${newRecipeID}`);
  }

  return (
    <>
      <TitleBar
        handleShowList={() => setShowList()}
        handleExpandMenu={() => setExpandMenu()}
        view="main"
        history={history}
        createNewRecipe={createNewRecipe}
      />
      <SideDrawer
        show={showList}
        expandMenu={expandMenu}
        ingredients={ingredients}
        removeIngredient={removeIngredient}
        clearIngredients={clearIngredients}
      />
      <RecipeGrid
        recipes={recipes}
        expandMenu={expandMenu}
        expandList={showList}
        addRecipeIngredients={addRecipeIngredients}
        history={history}
      />
    </>
  );
}

export default RecipeBox;
