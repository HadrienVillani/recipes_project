import { useQuery } from "@tanstack/react-query";
import {  fetchRecipes } from "assets/api/recipeApi";

export function useRecipe(props:string){
    return useQuery({
        queryFn : () => fetchRecipes(props),
        queryKey:["recipe",props]
    })
}