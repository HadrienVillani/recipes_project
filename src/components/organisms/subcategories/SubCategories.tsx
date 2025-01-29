import { NavLink, useParams } from "react-router-dom"
import data from '@data/categories'
import { useEffect, useState } from "react";

export const Subcategories = () =>{
    let params = useParams()
    const [subCategories, setSubcategories] = useState<string[]>([])
    let paramsCleared = params.subCategories?.slice(1)
    useEffect(()=>{
        for (let i = 0; i < data.length; i++) {
            if (data[i].name === paramsCleared){
                setSubcategories(data[i].subcategories)              
            }
        }
    })
    
    return <section>
        <h2>Test</h2>
    <ul>
    {
        subCategories.map(((element,key) =>{
            return <li key={key}><NavLink to={`${element}`}>{element}</NavLink></li>
        }))
    }
    </ul>
</section>
    

}