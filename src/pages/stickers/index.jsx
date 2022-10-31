import React, { useState, useEffect, useContext } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { giphyContexts } from "../../contexts/giphyContext";

function Stickers() {
  const [stickers, setStickers] = useState([]);
  const { setOffset2, page, nextButton, backButton, loading } =
    useContext(giphyContexts);

  const pagesCount = 25;

  useEffect(() => {
    async function loadGiphy(offset = pagesCount * page) {
      let key = "RBL9rQN0QL4EHnDTJC2kJW8bldXcnxfh&q";
      const response = await api.get(
        `gifs/search?api_key=${key}=stickers&limit=25&offset=${offset}&rating=g&lang=pt`
      );

      const data = response.data.data;

      setStickers(data);
    }

    loadGiphy();
  }, [page]);

  function getGifView() {
    const random = Math.floor(Math.random() * 99);
    setOffset2(random);
  }

  return (
    <main className="main-home">
      <div className="container-gifs">
        {stickers.map((gif, index) => {
          return (
            <div key={index} className="content-gifs">
              <div className="gif">
                <Link to={`/giphy/${gif.id}`} onClick={getGifView}>
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
        <button onClick={backButton}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button onClick={nextButton}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </main>
  );
}

export default Stickers;
