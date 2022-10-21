import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Gifs from './components/Gifs/gifs'
import Searchbar from './components/Searchbar/searchbar'
import Categories from './pages/Categories'
import Giphy from './pages/Giphy'

function RoutesApp() {
  return (
    <Router>
        <Searchbar/>
        <Routes>
            <Route path='/' element={<Gifs/>}/>
            <Route path='/giphy/:id' element={<Giphy/>}/>
            <Route path='/categories' element={<Categories/>}/>
        </Routes>
    </Router>
  )
}

export default RoutesApp