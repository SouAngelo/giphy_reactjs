import React, {useState, useEffect, useContext} from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import { giphyContexts } from '../../contexts/giphyContext'

function Sports() {

    const [sports, setSports] = useState([])
    const [offset, setOffset] = useState(0)

    const {setOffset2} = useContext(giphyContexts)

    useEffect(()=> {

        async function loadGiphy(){
  
          let key = 'RBL9rQN0QL4EHnDTJC2kJW8bldXcnxfh&q'
          const response = await api.get(`gifs/search?api_key=${key}=sports&limit=25&offset=${offset}&rating=g&lang=pt`)
  
          const newGiphy = response.data.data
          setSports(newGiphy)
          
        }
        
        loadGiphy()
        
      }, [])

      function getGifView(){
        const random = Math.floor(Math.random() * 99)
        setOffset2(random)
       }
    
  return (
    <div className='container-flex'>
        {sports.map((gif) => {
            return(
                <div key={gif.id} className='flex-container'>
                    <div className='gif'>
                        <Link to={`/giphy/${gif.id}`} onClick={getGifView}><img src={gif.images.original.url} style={{height: '200px'}}/></Link>
                    </div>
                </div>
                
            )
        })}

    </div>
  )
}

export default Sports