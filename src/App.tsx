import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from '@pages/Home'
import { RecipesPage } from '@pages/recipesPage/RecipesPage'
import { NavBar } from '@organisms/navbar'
import { ResultPage } from '@pages/resultsPage/ResultsPage'
import { LikedRecipes } from '@pages/likedRecipes'
import { IngredientsList } from '@pages/shoppingList'

function App() {


  return (
    <>
    <NavBar/>
     <Routes>
        <Route path="/recipes_project/" element={<Home/>}/>
        <Route path="/recipes_project/:recipes" element={<RecipesPage/>}/> 
        <Route path="/recipes_project/results-page" element={<ResultPage/>}/>
        <Route path="/recipes_project/shopping-list" element={<IngredientsList/>}/>
        <Route path="/recipes_project/liked-recipes" element={<LikedRecipes/>}/>
     </Routes>
    </>
  )
}

export default App
