import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { giphyContexts } from "../../contexts/giphyContext";
import "./style.sass";

function Gifs() {
  const { giphy, loading, setOffset2, backButton, nextButton } = useContext(giphyContexts);

  // vai mudar os dois gifs de view na pag giphy
  function getGifView() {
    const random = Math.floor(Math.random() * 99);
    setOffset2(random);
  }

  return (
    <main className="main-home">
      <div className="container-gifs">
        {giphy.map((gif, index) => {
          return (
            <div key={index} className="content-gifs">
              <div className="gif">
                <Link to={`giphy/${gif.id}`} onClick={getGifView}>
                  <img
                    src={gif.images.original.url}
                    style={{ height: "200px" }}
                  />
                </Link>
              </div>
            </div>
          );
        })}

        {loading && (
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>

      <div className="btns">
        <button onClick={backButton}><i className="fa-solid fa-arrow-left"></i></button>
        <button onClick={nextButton}><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </main>
  );
}

export default Gifs;
