import { Button } from "@atoms/button";
import { IRecipeItem } from "./RecipeItem.props";
import Input from "@atoms/input/Input";
import { useState } from "react";

export const RecipeItem = ({recipeItem}:IRecipeItem)=>{
    const [count , setCount] = useState(false)
    const [allLike, setAllLike] = useState(50)
    let ingredients = recipeItem.ingredients.split("|")
    const handleClick = () =>{
        
        !count ? setCount(true) : setCount(false)
        !count ? setAllLike(allLike + 1) : setAllLike(allLike -1)
    }
    return <>
            <h3>{recipeItem.title}</h3>
                <div className="flex justify-center my-5">
                    <h4>Nombre de protions : {" "} <span>{recipeItem.servings}</span></h4>
                </div>
                <div className="my-5">
                    <h4>Ingrédients</h4>
                    <ul className="flex items-center justify-center flex-wrap">{ingredients.map((ingredient, key)=>{
                        return <li className="border-3 border-amber-600 rounded-md p-3 m-1"key={key}>{ingredient}</li>
                    })}</ul>
                </div>
                <div>
                    <h4>Les instructions</h4>
                    <p>{recipeItem.instructions}</p>
                </div>
                <div className="flex w-full justify-center items-center my-10">
                    <div className="py-3 px-6 rounded-l-lg  text-black bg-amber-600 text-white text-lg">{allLike}</div>
                    <Button onClick={handleClick} label={!count ? "Like" : "Unlike"}/>
                </div>
            </>
}