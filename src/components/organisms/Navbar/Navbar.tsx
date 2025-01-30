import { SearchBar } from "@molecules/searchBar"
import { NavLink } from "react-router-dom"

export const NavBar = ()=>{
    return(
        <>
            <nav className="w-full flex items-center justify-between p-5 mb-15">
                <h1>Recipes Lovers</h1>
                <SearchBar/>
                <ul className="flex justify-between">
                    <NavLink to={"/"}><li>Home</li></NavLink>
                </ul>
            </nav>
        </>
    )
}