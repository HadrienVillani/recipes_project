import { create } from "zustand";

interface State {
  shoppingList: string[];
  setShoppingList: (recipe: string) => void;
  deleteIngredient: (ingredient: string) => void;
}

export const useShoppingList = create<any>((set) => ({
  shoppingList: [],
  setShoppingList: (recipe: string) => {
    set((state: State) => [
      ...state.shoppingList,
      state.shoppingList.push(recipe),
    ]);
  },
  deleteIngredient: (ingredient: string) => {
    set((state: State) =>
    ({shoppingList : state.shoppingList.filter((element) => element !== ingredient)})
    );
  },
}));
