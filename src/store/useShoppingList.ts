
import {create} from 'zustand'

interface IRecipe{
    ingredients:string,
    instructions:string,
    servings:string,
    title: string,
}

interface State {
    shoppingList : IRecipe[]
    setShoppingList : (recipe :IRecipe)=>void
}

export const useShoppingList = create<any>((set)=>({
    shoppingList: [],
    setShoppingList : (recipe:IRecipe) =>{set((state:State)=>[...state.shoppingList , state.shoppingList.push(recipe)])}
}))