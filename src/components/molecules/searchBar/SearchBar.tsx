import { Button } from "@atoms/button/Button"
import Input from "@atoms/input/Input"

export const SearchBar = ()=>{
    return <>
    <div className="flex items-center">
        
        <Input placeholder="Chercher une recette"/>
        <Button label="Chercher"/>
    </div>
    </>
    
}