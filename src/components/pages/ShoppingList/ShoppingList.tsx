import { Button } from "@atoms/button"
import { useShoppingList } from "@store/useShoppingList"

export const IngredientsList = () =>{
    const recipeAdded = useShoppingList((state)=>state.shoppingList)
    return <>
    <section>
        <h2>Liste de vos ingrédients</h2>
        <h4>Ingrédients total : {recipeAdded.length}</h4>
        <div className="grid grid-cols-4 h-auto">
        {recipeAdded.map((recipe:any, key:number)=> {return <div key={key} className="flex m-3 items-center rounded justify-between p-5 bg-neutral-700">
        <h4 className="mb-[0px]! mr-5">{recipe}</h4> <Button style={"rounded bg-red-600 border-none hover:bg-red-700"} label="X"/>
    </div>})}
        </div>
    </section>
    
    </>
}