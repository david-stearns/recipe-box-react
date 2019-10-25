import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./bootstrap-custom.scss";
import RecipeBox from "./RecipeBox";
import ViewRecipe from "./ViewRecipe";
import { demoRecipes } from "./demo-data";

function App() {
  if (!JSON.parse(window.localStorage.getItem("recipes"))) {
    window.localStorage.setItem("recipes", JSON.stringify(demoRecipes));
  }

  const [recipes, setRecipes] = useState(
    JSON.parse(window.localStorage.getItem("recipes")) || demoRecipes
  );

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
          />
        )}
      />
    </Switch>
  );
}

export default App;
