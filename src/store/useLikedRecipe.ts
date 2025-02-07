import { create } from "zustand";

interface IRecipe {
  ingredients: string;
  instructions: string;
  servings: string;
  title: string;
}
interface IAction {
  likedRecipes: IRecipe[];
  setLikedRecipe: (recipe: IRecipe) => void;
}
export const useLikedRecipe = create<IAction>((set) => ({
  likedRecipes: [],
  setLikedRecipe: (recipe) => {
    set((state) => ({ likedRecipes: [...state.likedRecipes, recipe] }));
  },
}));
