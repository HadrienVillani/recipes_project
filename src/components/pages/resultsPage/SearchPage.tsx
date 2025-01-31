import { RecipeItem } from "@molecules/recipeItem";
import { IRecipe } from "@pages/recipesPage";
import { useSearch } from "@store/useSearch";
import { useRecipe } from "hooks/queries";


export const ResultPage = () =>{
    const searchDone = useSearch((state) => state.searchDone)
    const {data ,isLoading, isError} =  useRecipe(searchDone)
    
    if(isLoading ){
        return <section className="flex items-center justify-center">
            <h2>Loading</h2>
        </section>
    }
    else if(isError){
      return  <section className="flex items-center justify-center">
        <h2 >Error</h2>
      </section>
    }
        console.log(data.length === 0 ? "ok": "pas ok");
        
    return(
        <>
        <section>
            <h2>Vos resultats</h2>
            {
                data.length !== 0 ? <ul className="flex flex-wrap">{data.map((recipe:IRecipe, key:number)=>{
                    return <li className='shadow-2xl rounded-md my-10 mr-10 p-10 bg-neutral-700' key={key}>
                             <RecipeItem recipeItem={recipe}/>
                           </li>  
                 })}</ul> : <h4>Aucun résultat</h4>
            }
        </section>
        </>
    )
}