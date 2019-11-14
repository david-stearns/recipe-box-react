import useLocalStorageState from "./useLocalStorageState";
import { Recipe, demoRecipes, demoIngredients } from "../demo-data";
import uuid from "uuidv4";

export default useRecipeState => {
  const [recipes, setRecipes] = useLocalStorageState("recipes", demoRecipes);
  const [ingredients, setIngredients] = useLocalStorageState(
    "ingredients",
    demoIngredients
  );

  return {
    recipes,
    ingredients,
    setRecipes,
    updateRecipe: newRecipe => {
      const updatedRecipes = recipes.map(recipe => {
        return recipe.id === newRecipe.id ? newRecipe : recipe;
      });
      setRecipes(updatedRecipes);
    },

    findRecipe: id => {
      return recipes.find(recipe => {
        return recipe.id === id;
      });
    },

    removeIngredient: idx => {
      let newIngredients = [...ingredients];
      newIngredients.splice(idx, 1);
      setIngredients(newIngredients);
    },

    addRecipeIngredients: id => {
      let newIngredients = recipes.find(recipe => {
        return recipe.id === id;
      }).ingredients;
      setIngredients(ingredients.concat(newIngredients));
    },

    addSingleIngredient: ingredient => {
      setIngredients(ingredients.concat(ingredient));
    },

    clearIngredients: () => {
      setIngredients([]);
    },

    deleteRecipe: id => {
      const updatedRecipes = recipes.filter(recipe => {
        return recipe.id !== id && recipe;
      });
      setRecipes(updatedRecipes);
    },
    createNewRecipe: () => {
      const newRecipeID = uuid();
      let newRecipe = new Recipe(newRecipeID);
      newRecipe.firstEdit = true;
      setRecipes([...recipes, newRecipe]);
      return newRecipeID;
      // history.push(`/recipe/${newRecipeID}`);
    }
  };
};
