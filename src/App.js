import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import uuid from "uuidv4";
import useLocalStorageState from "./hooks/useLocalStorageState";
import "./bootstrap-custom.scss";
import RecipeBox from "./RecipeBox";
import ViewRecipe from "./ViewRecipe";
import { Recipe, demoRecipes, demoIngredients } from "./demo-data";

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
    setIngredients(ingredients.concat(ingredient));
  }

  function clearIngredients() {
    setIngredients([]);
  }

  function deleteRecipe(id) {
    const updatedRecipes = recipes.filter(recipe => {
      return recipe.id !== id && recipe;
      // if (recipe.id !== id) return recipe;
    });
    // console.log(updatedRecipes);
    setRecipes(updatedRecipes);
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
            setRecipes={setRecipes}
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
            deleteRecipe={deleteRecipe}
          />
        )}
      />
    </Switch>
  );
}

export default App;
