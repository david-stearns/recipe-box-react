import React, { useState, useContext } from "react";
import useToggle from "./hooks/useToggle";
import TitleBar from "./TitleBar";
import SideDrawer from "./SideDrawer";
import RecipeGrid from "./RecipeGrid";
import { RecipeContext } from "./contexts/RecipeContext";

function RecipeBox({ history }) {
  const { recipes, createNewRecipe } = useContext(RecipeContext);

  const [showList, setShowList] = useToggle(false);
  const [expandMenu, setExpandMenu] = useToggle(false);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  function handleCreateNewRecipe() {
    const newRecipeID = createNewRecipe();
    history.push(`/recipe/${newRecipeID}`);
  }

  function searchRecipes(searchText) {
    let filtered = [];
    recipes.forEach(recipe => {
      if (recipe.title.toLowerCase().includes(searchText.toLowerCase())) {
        filtered.push(recipe);
      }
    });
    setFilteredRecipes(filtered);
  }

  return (
    <>
      <TitleBar
        handleShowList={() => setShowList()}
        handleExpandMenu={() => setExpandMenu()}
        view="main"
        history={history}
        createNewRecipe={handleCreateNewRecipe}
        searchRecipes={searchRecipes}
      />
      <SideDrawer show={showList} expandMenu={expandMenu} />
      <RecipeGrid
        recipes={filteredRecipes}
        expandMenu={expandMenu}
        expandList={showList}
      />
    </>
  );
}

export default RecipeBox;
