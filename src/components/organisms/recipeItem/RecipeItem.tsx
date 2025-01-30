import { IRecipeItem } from "./RecipeItem.props";

export const RecipeItem = ({recipeItem}:IRecipeItem)=>{
    console.log(recipeItem);
    
    return <>
            <h3>{recipeItem.title}</h3>
                <div>
                    <h4>Nombre de protions :</h4>
                    <p>{recipeItem.servings}</p>
                </div>
                <div>
                    <h4>Ingrédients</h4>
                    <p>{recipeItem.ingredients}</p>
                </div>
                <div>
                    <h4>Les instructions</h4>
                    <p>{recipeItem.instructions}</p>
                </div>
            </>
}