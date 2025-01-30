import { NavLink } from "react-router-dom"

export const Navbar = ()=>{
    return(
        <>
            <nav className="w-full flex items-center justify-between p-5 mb-15">
                <h1>Recipes Lovers</h1>
                <ul className="flex w-1/5 justify-between">
                    <NavLink to={"/"}><li>Home</li></NavLink>
                    <NavLink><li>Liste de course</li></NavLink>
                </ul>
            </nav>
        </>
    )
}