import { SearchBar } from "@molecules/searchBar"
import { NavLink } from "react-router-dom"

export const NavBar = ()=>{
    return(
        <>
            <nav className="px-10 w-screen flex items-center justify-between p-5 mb-15 shadow-md">
                <NavLink to="/"><h1>Recipes Lovers</h1></NavLink>
                <SearchBar/>
                <ul className="flex justify-between">
                    <NavLink to={"/"}><li className="font-bold uppercase hover:text-amber-600">Home</li></NavLink>
                </ul>
            </nav>
        </>
    )
}