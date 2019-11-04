import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import useLocalStorageState from "./hooks/useLocalStorageState";
import "./bootstrap-custom.scss";
import RecipeBox from "./RecipeBox";
import ViewRecipe from "./ViewRecipe";
import { demoRecipes } from "./demo-data";

function App() {
  // if (!JSON.parse(window.localStorage.getItem("recipes"))) {
  //   window.localStorage.setItem("recipes", JSON.stringify(demoRecipes));
  // }
  //
  // const [recipes, setRecipes] = useState(
  //   JSON.parse(window.localStorage.getItem("recipes")) || demoRecipes
  // );

  const [recipes, setRecipes] = useLocalStorageState("recipes", demoRecipes);

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

  return (
    <Switch>
      <Route
        path="/"
        exact
        render={routeProps => <RecipeBox {...routeProps} recipes={recipes} />}
      />
      <Route
        path="/recipe/:id"
        exact
        render={routeProps => (
          <ViewRecipe
            {...routeProps}
            recipe={findRecipe(routeProps.match.params.id)}
            updateRecipe={updateRecipe}
          />
        )}
      />
    </Switch>
  );
}

export default App;
