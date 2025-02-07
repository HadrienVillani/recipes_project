import { Button } from "@atoms/button";
import { IRecipeItem } from "./RecipeItem.props";
import { useState } from "react";
import { useShoppingList } from "@store/useShoppingList";
import { ingredients } from "@data/igredients";
import { useLikedRecipe } from "@store/useLikedRecipe";

export const RecipeItem = ({recipeData, key}:IRecipeItem)=>{

    const [count , setCount] = useState(false)
    const [allLike, setAllLike] = useState(50)

    const setShoppingList= useShoppingList((state)=>state.setShoppingList);
    const shoppingList= useShoppingList((state)=>state.shoppingList);
    const {setLikedRecipe} = useLikedRecipe()
    let recipeIngredients = recipeData.ingredients.split("|")

    const handleClick = () =>{
        !count ? setCount(true) : setCount(false)
        !count ? setAllLike(allLike + 1) : setAllLike(allLike -1)
        setLikedRecipe(recipeData)
    }

    const addToShoppingList = () =>{
        for (let t = 0; t < ingredients.length; t++) {
            for (let i = 0; i < recipeIngredients.length; i++) {
                if(recipeIngredients[i].toLowerCase().includes(ingredients[t].toLowerCase())){
                   const isExist = shoppingList.indexOf(ingredients[t]) !== -1 
                    !isExist &&   setShoppingList(ingredients[t].toLowerCase())               
                }
            } 
        }
    }
    
    return <>
            
            <li className='shadow-2xl rounded-md my-10 mr-10 p-10 bg-neutral-700' key={key}>
                    <h3>{recipeData.title}</h3>
                <div className="flex justify-center my-5">
                    <h4>Nombre de protions : {" "} <span>{recipeData.servings}</span></h4>
                </div>
                <div className="my-5">
                    <h4>Ingrédients</h4>
                    <ul className="flex items-center justify-center flex-wrap">{recipeIngredients.map((ingredient, key)=>{
                        return <li className="border-3 border-amber-600 rounded-md p-3 m-1"key={key}>{ingredient.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>]/gi, '')}</li>
                    })}</ul>
                </div>
                <div>
                    <h4>Les instructions</h4>
                    <p>{recipeData.instructions}</p>
                </div>
                    <div className="flex justify-center items-center mt-10">
                        <Button style="w-2/5 rounded-lg mr-10" onClick={addToShoppingList} label={"Ajouter la recette à la liste de course"}/>
                        <div className="flex">
                            <div className="py-3 px-6 w-[100px] rounded-l-lg  text-black bg-amber-600 text-white text-lg">{allLike}</div>
                            <Button style="rounded-r-md font-bold" onClick={handleClick} label={!count ? "♡" : "♥" }/>
                        </div>
                    </div>
                  </li>  
                
            </>
}