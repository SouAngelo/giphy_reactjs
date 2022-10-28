import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Gifs from './components/Gifs/gifs'
import Searchbar from './components/Searchbar/searchbar'
import Anime from './pages/anime'
import Artists from './pages/artists'
import Giphy from './pages/Giphy'
import Sports from './pages/sports'
import Stickers from './pages/stickers'

function RoutesApp() {
  return (
    <Router>
        <Searchbar/>
        <Routes>
            <Route path='/' element={<Gifs/>}/>
            <Route path='/sports' element={<Sports/>}/>
            <Route path='/stickers' element={<Stickers/>}/>
            <Route path='/artists' element={<Artists/>}/>
            <Route path='/anime' element={<Anime/>}/>
            <Route path='/giphy/:id' element={<Giphy/>}/>
            
        </Routes>
    </Router>
  )
}

export default RoutesApp