import React, { useState, useEffect, useContext, useRef } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams, Link } from "react-router-dom"
import Modal from "../components/Modal"
import { giphyContexts } from "../contexts/giphyContext"
import api from "../services/api"
import "./giphy.sass"

function Giphy() {
  const verified =
    "http://agenciametrica.com.br/blog/wp-content/uploads/2018/08/kisspng-verified-badge-logo-youtube-5ae52f26e48bd5.9268580015249692549361-150x150.png"

  const [gif, setGif] = useState([])
  const { viewGiphy } = useContext(giphyContexts)
  const modal = useRef(null)

  const { id } = useParams()

  useEffect(() => {
    async function getGiphy() {
      try{
        let key = "RBL9rQN0QL4EHnDTJC2kJW8bldXcnxfh&q"
      const response = await api.get(`gifs/${id}?api_key=${key}`)
      setGif(response.data.data)

      } catch (err){
        console.log('deu ruim ' + err)
      }
    }

    getGiphy();
  }, [gif]);

  function copyLink(){
    
      navigator.clipboard.writeText(gif?.url);
      
      toast('😀 Copiado com sucesso!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
  }

  function onModal(){
    modal.current.classList.remove('hide')

  }



  return (
    <main className="main">
      <div className="container-gif">
        <aside>
          <div className="creator">
            <img src={gif.user?.avatar_url || (!gif.user && verified)} alt="" />

            <div className="container-name">
              <h1>{gif.user?.display_name}</h1>
              <label>
                <a href={gif.user?.instagram_url} target="_blank">
                  {(gif.user && <p>@{gif.user?.username}</p>) ||
                    (!gif.user && <p>{gif.title}</p>)}
                </a>
                {gif.user?.is_verified && <img src={verified} />}
              </label>
            </div>
          </div>

          <div className="description">
            <p>{gif.user?.description}</p>
          </div>

          <div className="gif-static">
            <img src="https://giphy.com/static/img/zoomies.gif" alt="" />
          </div>
        </aside>

        <section className="giphy">
          <div className="giff">
            <h1>{gif.title}</h1>
            <img src={gif.images?.original.url} onClick={onModal} />
          </div>

          <div className="copy-link">
            <button onClick={copyLink}>
              <i className="fa-solid fa-link"></i> Copiar GIF Link
            </button>

            <div className="random-gif">
              {viewGiphy.map((gif) => {
                return (
                  <Link to='/' key={gif.id}>
                    <img src={gif.images?.original.url} />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <div className="footer">
        <Link to="/">
          <img
            src="https://media.giphy.com/headers/2022-10-17-33-1666031634/HALLOWEEN_BANNER_2022_HP.gif"
          />
        </Link>
      </div>

      <Modal gif={gif}
       modal={modal}
       onModal={onModal}
       />

       <ToastContainer />
    </main>
  );
}

export default Giphy;
