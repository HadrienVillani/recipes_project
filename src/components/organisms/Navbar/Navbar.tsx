import { SearchBar } from "@molecules/searchBar"
import { NavLink } from "react-router-dom"

export const NavBar = ()=>{
    return(
        <>
            <nav className="px-10 w-screen flex items-center justify-between p-5 mb-15 shadow-md">
                <NavLink to="/recipes_project/"><h1>Recipes Lovers</h1></NavLink>
                <SearchBar/>
                <ul className="flex justify-between">
                    <NavLink to={"/recipes_project/"}><li className="font-bold m-3 uppercase hover:text-amber-600">Home</li></NavLink>
                    <NavLink to={"/recipes_project/shopping-list"}><li className="font-bold uppercase m-3 hover:text-amber-600">Shopping List</li></NavLink>
                    <NavLink to={"/recipes_project/liked-recipes"}><li className="font-bold uppercase m-3 hover:text-amber-600">Liked Recipes</li></NavLink>
                </ul>
            </nav>
        </>
    )
}