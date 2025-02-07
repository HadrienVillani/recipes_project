import { RecipeItem } from "@molecules/recipeItem";
import { useLikedRecipe } from "@store/useLikedRecipe";

export const LikedRecipes = () => {

  const {likedRecipes} = useLikedRecipe()

  return (
    <>
      <section className="flex items-center justify-center">
        {likedRecipes.length !== 0 ? <div>
          <h2>Les recettes que vous avez aimez</h2>
          <div>
          {likedRecipes.map((recipe,key)=>{
            return <div>
              <RecipeItem key={key} recipeData={recipe}/>
            </div>
          })}
        </div>
        </div> : <h2>Vous n'avez likez aucune recette</h2>}
      </section>
    </>
  );
};
