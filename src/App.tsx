import {Routes, Route} from 'react-router-dom'

import './App.css'
import Home from '@pages/Home'

import SubCategoriesPage from '@pages/SubCategoriesPage'

function App() {


  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path=":subCategories" element={<SubCategoriesPage/>}/> 
     </Routes>
    </>
  )
}

export default App
