import axios from 'axios' 


export const fetchRecipes =async(props:string)=>{
    if(props){
        const response = await axios.get(`https://api.api-ninjas.com/v1/recipe?query=${props}`, {headers:{'x-api-key':'LiXHgQBzW8n2WWJiDPY6qQ==9Sluog2wOWtbq80k'}})
    return response.data
    }else{
        throw new Error("req vide")
    }
}