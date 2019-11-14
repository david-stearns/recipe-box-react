import React, { createContext } from "react";
import useRecipeState from "../hooks/useRecipeState";

export const RecipeContext = createContext();

export function RecipeProvider(props) {
  // const test = "testing123";

  const recipeStuff = useRecipeState();

  return (
    <RecipeContext.Provider value={recipeStuff}>
      {props.children}
    </RecipeContext.Provider>
  );
}
