import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from '@pages/Home'
import { RecipesPage } from '@pages/recipesPage/RecipesPage'
import { Navbar } from '@organisms/navbar/Navbar'

function App() {


  return (
    <>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path=":recipes" element={<RecipesPage/>}/> 
     </Routes>
    </>
  )
}

export default App
