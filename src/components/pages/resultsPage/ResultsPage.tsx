import { RecipeItem } from "@molecules/recipeItem";
import { IRecipe } from "@pages/recipesPage";
import { useSearch } from "@store/useSearch";
import { useRecipe } from "hooks/queries";

export const ResultPage = () => {
  const searchDone = useSearch((state) => state.searchDone);
  const { data, isLoading, isError } = useRecipe(searchDone);

  if (isLoading) {
    return (
      <section className="flex items-center justify-center">
        <h2>Loading</h2>
      </section>
    );
  } else if (isError) {
    return (
      <section className="flex items-center justify-center">
        <h2>Error</h2>
      </section>
    );
  }

  return (
    <>
      <section>
        <h2>Vos resultats</h2>
        {data.length !== 0 ? (
          <ul className="flex flex-wrap">
            {data.map((recipe: IRecipe, key: number) => {
              return <RecipeItem key={key} recipeData={recipe} />;
            })}
          </ul>
        ) : (
          <h4>Aucun résultat</h4>
        )}
      </section>
    </>
  );
};
