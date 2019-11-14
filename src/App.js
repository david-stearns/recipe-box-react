import React from "react";
import { Route, Switch } from "react-router-dom";
import "./bootstrap-custom.scss";
import RecipeBox from "./RecipeBox";
import ViewRecipe from "./ViewRecipe";
import { RecipeProvider } from "./contexts/RecipeContext";

function App() {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={routeProps => (
          <RecipeProvider>
            <RecipeBox {...routeProps} />
          </RecipeProvider>
        )}
      />
      <Route
        path="/recipe/:id"
        exact
        render={routeProps => (
          <RecipeProvider>
            <ViewRecipe {...routeProps} />
          </RecipeProvider>
        )}
      />
    </Switch>
  );
}

export default App;
