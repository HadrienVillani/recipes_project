import { Button } from "@atoms/button";
import { useShoppingList } from "@store/useShoppingList";

export const IngredientsList = () => {
  const shoppingList = useShoppingList((state) => state.shoppingList);
  const deleteIngredient = useShoppingList((state) => state.deleteIngredient);

  const handleClick = (key: number) => {
    const ingredientToDelete = shoppingList.splice(key, 1);
    deleteIngredient(ingredientToDelete);
    console.log(shoppingList);
  };

  return (
    <>
      <section>
        <h2>Liste de vos ingrédients</h2>
        <h4>Ingrédients total : {shoppingList.length}</h4>
        <div className="grid grid-cols-4 h-auto">
          {shoppingList.map((recipe: any, key: number) => {
            return (
              <div
                key={key}
                className="flex m-3 items-center rounded justify-between p-5 bg-neutral-700"
              >
                <h4 className="mb-[0px]! mr-5">{recipe}</h4>{" "}
                <Button
                  style={"rounded bg-red-600 border-none p-1 hover:bg-red-700"}
                  label="X"
                  onClick={() => handleClick(key)}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
