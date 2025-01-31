import { Button } from "@atoms/button/Button"
import Input from "@atoms/input/Input";
import { useSearch } from "@store/useSearch";
import { useNavigate } from "react-router-dom";

export const SearchBar = () =>{
    const changes = useSearch((state) => state.searchData)
    const onChange = useSearch((state)=>state.onChange)
    const onSubmit = useSearch((state)=>state.onSubmit)
    let navigate = useNavigate()
    function handleSubmit (){        
        onSubmit(changes)  
        if(changes){
            navigate("/results-page")
        }
    }

    
    
    return (
        <div className="flex items-center"> 
            <Input onChange={(e:any)=>onChange(e.currentTarget.value)}placeholder="Chercher une recette"/>
            <Button onClick={handleSubmit} label="Chercher"/>
        </div>
    ) 
}