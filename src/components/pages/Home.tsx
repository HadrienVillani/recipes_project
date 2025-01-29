import Categories from "@organisms/categories/Categories"
import { NavLink } from "react-router-dom"


function Home() {
  return (
    <section>
      <h1>Recettes lovers</h1>
      <NavLink to="categories">Toute les catégories</NavLink>
      <Categories/>
    </section>
  )
}

export default Home