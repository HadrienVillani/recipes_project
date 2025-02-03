import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from '@pages/Home'
import { RecipesPage } from '@pages/recipesPage/RecipesPage'
import { NavBar } from '@organisms/navbar'
import { ResultPage } from '@pages/resultsPage/ResultsPage'
import { LikesPages } from '@pages/likesPage'
import { IngredientsList } from '@pages/IngredientsList'

function App() {


  return (
    <>
    <NavBar/>
     <Routes>
        <Route path="/recipes_project/" element={<Home/>}/>
        <Route path="/recipes_project/:recipes" element={<RecipesPage/>}/> 
        <Route path="/recipes_project/results-page" element={<ResultPage/>}/>
        <Route path="/recipes_project/likes-page" element={<LikesPages/>}/>
        <Route path="/recipes_project/ingredients-list" element={<IngredientsList/>}/>
     </Routes>
    </>
  )
}

export default App
