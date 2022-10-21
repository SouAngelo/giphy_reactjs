import React, { useContext, useState, useEffect } from 'react'
import { giphyContexts } from '../../contexts/giphyContext'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../services/api'
import logo from './logo.gif'
import './style.sass'

function Searchbar() {

  const {search, setSearch} = useContext(giphyContexts)

  const [gif, setGif] = useState('')

  const navigate = useNavigate()

  function getGiphy(e){

    e.preventDefault()

    setSearch(gif)
  }


  function getCategory(e){
      e.preventDefault()

      navigate('/categories')
  }

  return (
    <div className='container'>

        <div className="categories">
              <div className="logo">
                  <img src={logo} alt="" />
                  <Link to='/'><h1>GIPHY</h1></Link>
              </div>

              <nav>
                <ul>
                    <Link onClick={getCategory}><li>Reactions</li></Link>
                    <Link onClick={getCategory}><li>Enterainment</li></Link>
                    <Link onClick={getCategory}><li>Sports</li></Link>
                    <Link onClick={getCategory}><li>Stickers</li></Link>
                    <Link onClick={getCategory}><li>Artists</li></Link>
                    <Link onClick={getCategory}><li>Anime</li></Link>
                    <Link onClick={getCategory}><li>Memes</li></Link>
                </ul>
              </nav>
        </div>

        <form onSubmit={getGiphy}>
           <input type="text" value={gif} onChange={(e) => setGif(e.target.value)} placeholder='Procure aqui'/>
           <button type='submit'>buscar</button>
        </form>
       
    </div>
  )
}

export default Searchbar