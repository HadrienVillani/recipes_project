import { IRecipeItem } from "./RecipeItem.props";

export const RecipeItem = ({recipeItem}:IRecipeItem)=>{
    
    let ingredients = recipeItem.ingredients.split("|")

    return <>
            <h3>{recipeItem.title}</h3>
                <div className="flex justify-center my-5">
                    <h4>Nombre de protions : {" "} <span>{recipeItem.servings}</span></h4>
                </div>
                <div className="my-5">
                    <h4>Ingrédients</h4>
                    <ul className="flex items-center justify-center flex-wrap">{ingredients.map((ingredient, key)=>{
                        return <li className="bg-indigo-700 rounded-md p-5 m-1"key={key}>{ingredient}</li>
                    })}</ul>
                </div>
                <div>
                    <h4>Les instructions</h4>
                    <p>{recipeItem.instructions}</p>
                </div>
            </>
}