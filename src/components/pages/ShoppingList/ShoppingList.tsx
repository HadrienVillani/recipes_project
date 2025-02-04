import { useShoppingList } from "@store/useShoppingList"

export const IngredientsList = () =>{
    const recipeAdded = useShoppingList((state)=>state.shoppingList)
    return <>
    {recipeAdded.map((recipe:any)=> {return <h2>{recipe.title}</h2> })}
    </>
}