import {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { giphyContexts } from '../../contexts/giphyContext'
import './style.sass'

function Gifs() {
 
    const {giphy, loading, setOffset2 } = useContext(giphyContexts)


   // vai mudar os dois gifs de view na pag giphy
   function getGifView(){
    const random = Math.floor(Math.random() * 99)
    setOffset2(random)
   }


    if(loading){
        <div>
            <h1>Carregando...</h1>
        </div>
    }

  return (
    <div className='container-flex'>
        {giphy.map((gif) => {
            return(
                <div key={gif.id} className='flex-container'>
                    <div className='gif'>
                        <Link to={`giphy/${gif.id}`} onClick={getGifView}><img src={gif.images.original.url} style={{height: '200px'}}/></Link>
                    </div>
                </div>
                
            )
        })}

    </div>
    
  )
}

export default Gifs