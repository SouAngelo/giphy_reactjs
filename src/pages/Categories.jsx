import React, {useContext} from 'react'
import {giphyContexts} from '../contexts/giphyContext'

function Categories() {
  
 const { categorie } = useContext(giphyContexts)

 function teste(){
  console.log('')
 }

  return (
    <div>
      <button onClick={teste}>Categoria</button>
    </div>
  )
}

export default Categories