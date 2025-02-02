import { Link } from "react-router-dom"
import { ICategorie } from "./Categorie.props"

export const Categorie:React.FC<ICategorie> = ({title, path, key}) =>{

    
    return(
        <>
            <Link key={key} to={path}>
                <li className="className='duration-500 border-2 border-amber-600 shadow-2xl rounded-md my-5 mr-10 p-10 bg-amber-600 font-bold uppercase hover:bg-transparent'">{title}</li> 
            </Link>
        </>
    )
}