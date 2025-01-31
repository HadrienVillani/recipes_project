import { IQuery } from "@organisms/categories";
import { RecipeItem } from "@molecules/recipeItem";
import { useRecipe } from "hooks/queries";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { IRecipe } from "./RecipesPage.props";

export const RecipesPage = ()=>{
  const { search } = useLocation();
  const queryParams = useMemo(() => search, [search]);
  function makeTitle(slug:string) {
    var words = slug.split('-');
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return words.join(' ');
  }
  
  function queryStringToObject(queryString:string, object:IQuery) {
    let queryObject:any = object;
    queryString && decodeURIComponent(queryString.replace('?', '')).split('&').map((itemString) => {
      let [itemKey, itemValue] = itemString.split("=");
       queryObject[itemKey] = itemValue  
    });
    return queryObject;
  };

  const result = queryStringToObject(queryParams, {categorie:"", subCategorie:""})
  
  const { data } = useRecipe(makeTitle(result.subCategorie));
  
return (
        <section>
        <h2>Page de recettes de la catégorie : {makeTitle(result.subCategorie)} </h2>
        <ul className="flex flex-wrap">{data && data.map((recipe:IRecipe, key:number)=>{
           return <li className='shadow-2xl rounded-md my-10 mr-10 p-10 bg-neutral-700' key={key}>
                    <RecipeItem recipeItem={recipe}/>
                  </li>  
        })}</ul>
        </section>
)
}