import {create} from 'zustand'


export const useShoppingList = create((set)=>({
    shoppingList: [],
}))