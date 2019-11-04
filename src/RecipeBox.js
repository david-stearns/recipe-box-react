import React, { useState } from "react";
import useToggle from "./hooks/useToggle";
import TitleBar from "./TitleBar";
import SideDrawer from "./SideDrawer";
import RecipeGrid from "./RecipeGrid";
import { demoIngredients } from "./demo-data";

function RecipeBox({
  recipes,
  history,
  ingredients,
  removeIngredient,
  clearIngredients,
  addRecipeIngredients
}) {
  const [showList, setShowList] = useToggle(false);
  const [expandMenu, setExpandMenu] = useToggle(false);
  // const [ingredients, setIngredients] = useState(demoIngredients);

  // function removeIngredient(idx) {
  //   let newIngredients = [...ingredients];
  //   newIngredients.splice(idx, 1);
  //   setIngredients(newIngredients);
  // }
  //
  // function addRecipeIngredients(id) {
  //   let newIngredients = recipes.find(recipe => {
  //     return recipe.id === id;
  //   }).ingredients;
  //   setIngredients(ingredients.concat(newIngredients));
  // }
  //
  // function addSingleIngredient(ingredient) {
  //   setIngredients(ingredients.push(ingredient));
  // }
  //
  // function clearIngredients() {
  //   setIngredients([]);
  //   console.log(ingredients);
  // }

  return (
    <>
      <TitleBar
        handleShowList={() => setShowList()}
        handleExpandMenu={() => setExpandMenu()}
        view="main"
        history={history}
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
