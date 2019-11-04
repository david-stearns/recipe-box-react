import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import useLocalStorageState from "./hooks/useLocalStorageState";
import "./bootstrap-custom.scss";
import RecipeBox from "./RecipeBox";
import ViewRecipe from "./ViewRecipe";
import { demoRecipes, demoIngredients } from "./demo-data";

function App() {
  const [recipes, setRecipes] = useLocalStorageState("recipes", demoRecipes);
  const [ingredients, setIngredients] = useLocalStorageState(
    "ingredients",
    demoIngredients
  );

  function updateRecipe(newRecipe) {
    // console.log(newRecipe.title);
    const updatedRecipes = recipes.map(recipe => {
      return recipe.id === newRecipe.id ? newRecipe : recipe;
    });
    setRecipes(updatedRecipes);
  }

  function findRecipe(id) {
    return recipes.find(recipe => {
      return recipe.id === id;
    });
  }

  function removeIngredient(idx) {
    let newIngredients = [...ingredients];
    newIngredients.splice(idx, 1);
    setIngredients(newIngredients);
  }

  function addRecipeIngredients(id) {
    let newIngredients = recipes.find(recipe => {
      return recipe.id === id;
    }).ingredients;
    setIngredients(ingredients.concat(newIngredients));
  }

  function addSingleIngredient(ingredient) {
    console.log(typeof ingredients);
    console.log(ingredients);
    setIngredients(ingredients.concat(ingredient));
  }

  function clearIngredients() {
    setIngredients([]);
    console.log(ingredients);
  }

  return (
    <Switch>
      <Route
        path="/"
        exact
        render={routeProps => (
          <RecipeBox
            {...routeProps}
            recipes={recipes}
            ingredients={ingredients}
            removeIngredient={removeIngredient}
            addRecipeIngredients={addRecipeIngredients}
            clearIngredients={clearIngredients}
          />
        )}
      />
      <Route
        path="/recipe/:id"
        exact
        render={routeProps => (
          <ViewRecipe
            {...routeProps}
            recipe={findRecipe(routeProps.match.params.id)}
            updateRecipe={updateRecipe}
            addSingleIngredient={addSingleIngredient}
          />
        )}
      />
    </Switch>
  );
}

export default App;
