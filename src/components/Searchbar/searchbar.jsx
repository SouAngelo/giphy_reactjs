import React, { useContext, useState, useEffect, useRef } from 'react'
import Burger from '@animated-burgers/burger-squeeze' 
import '@animated-burgers/burger-squeeze/dist/styles.css' 
import { giphyContexts } from '../../contexts/giphyContext'
import { Link, useNavigate } from 'react-router-dom'
import logo from './logo.gif'
import './style.sass'

function Searchbar() {

  const {search, setSearch} = useContext(giphyContexts)
  const [gif, setGif] = useState('')
  const navigate = useNavigate()

  const [open, setOpen] = useState(false);
  const hamb = useRef(null);

  const openHamburguer = () => {
    setOpen(!open);

    if (open === true) {
      hamb.current.style.display = "none";
    } else {
      hamb.current.style.display = "block";
    }
  };

  function getGiphy(e){

    e.preventDefault()

    setSearch(gif)
    setGif('')

    navigate('/')

  }



  return (
    <header className='container'>

        <div className="categories">
              <div className="logo">
                  <img src={logo} alt="" />
                  <Link to='/'><h1>GIPHY</h1></Link>
              </div>

              <nav ref={hamb}>
                <ul>
                    <Link to='/sports'><li>Sports</li></Link>
                    <Link to='/stickers'><li>Stickers</li></Link>
                    <Link to='/artists'><li>Artists</li></Link>
                    <Link to='/anime'><li>Animes</li></Link>
                </ul>
                
              </nav>
              <Burger isOpen={open} onClick={openHamburguer} id='burguer' />
        </div>

        <form onSubmit={getGiphy}>
           <input type="text" value={gif} onChange={(e) => setGif(e.target.value)} placeholder='Procure aqui'/>
           <button type='submit'>
              <i className="fa-solid fa-magnifying-glass search"></i>
           </button>
        </form>
       
    </header>
  )
}

export default Searchbar