import {useEffect, useState, createContext} from 'react'
import { useParams } from 'react-router-dom'
import api from '../services/api'


export const giphyContexts = createContext({})

function GiphyProvider({children}){

    const [giphy, setGiphy] = useState([])
    const [search, setSearch] = useState('gif')
    const [categorie, setCategorie] = useState([])

    const [offset, setOffset] = useState(0)
    const [offset2, setOffset2] = useState(0)
    const [viewGiphy, setViewGiphy] = useState([])
    const [loading, setLoading] = useState(false)

    const { id } = useParams()
  

    useEffect(()=> {

      async function loadGiphy(){

        let key = 'RBL9rQN0QL4EHnDTJC2kJW8bldXcnxfh&q'
        const response = await api.get(`gifs/search?api_key=${key}=${search}&limit=25&offset=${offset}&rating=g&lang=pt`)

        const newGiphy = response.data.data
        setGiphy(newGiphy)
        
      }
      
      loadGiphy()
      
    }, [giphy, id])

    // chamada para atualizar os dois gifs de amostra na pag giphy

    useEffect(()=> {

      async function getGiphy(){
  
        let key = 'RBL9rQN0QL4EHnDTJC2kJW8bldXcnxfh&q'
        const response = await api.get(`gifs/search?api_key=${key}=search&limit=2&offset=${offset2}&rating=g&lang=pt`)
  
        const newGiphy = response.data.data
        setViewGiphy(newGiphy)
  
        
      }
      
      getGiphy()
      
    }, [viewGiphy])


  // chamada das categorias
    useEffect(()=> {

      async function loadCategory(){
  
        let key = 'RBL9rQN0QL4EHnDTJC2kJW8bldXcnxfh&q'
        // const response = await api.get(`gifs/search?api_key=${key}=${tst}&limit=25&offset=0&rating=g&lang=pt`)
        // setCategorie(response)
      }
      
      loadCategory()
      
    }, [])

  
    return(
        <giphyContexts.Provider value={{giphy, search, setSearch, loading, viewGiphy, setOffset2,}}>
           {children}
       </giphyContexts.Provider>
    )
}

export default GiphyProvider