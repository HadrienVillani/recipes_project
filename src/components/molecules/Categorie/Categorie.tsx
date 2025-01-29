import { ICategorie } from "./Categorie.props"

export const Categorie:React.FC<ICategorie> = ({name}) =>{
    return(
        <>
            <div><h3>{name}</h3></div>
        </>
    )
}