import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from '@pages/Home'
import { RecipesPage } from '@pages/recipesPage/RecipesPage'
import { ResultPage } from '@pages/resultsPage/SearchPage'
import { NavBar } from '@organisms/navbar'

function App() {


  return (
    <>
    <NavBar/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path=":recipes" element={<RecipesPage/>}/> 
        <Route path="/results-page" element={<ResultPage/>}/>
     </Routes>
    </>
  )
}

export default App
