import { useEffect, useState, createContext } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export const giphyContexts = createContext({});

function GiphyProvider({ children }) {
  const [giphy, setGiphy] = useState([]);
  const [search, setSearch] = useState("");

  const [offset2, setOffset2] = useState(0);
  const [viewGiphy, setViewGiphy] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(0)

  const { id } = useParams();

  const pagesCount = 25;

  useEffect(() => {
    async function loadGiphy(limit = pagesCount, offset = pagesCount * page) {
      let key = "RBL9rQN0QL4EHnDTJC2kJW8bldXcnxfh&q";
      const response = await api.get(`gifs/search?api_key=${key}=${search == "" ? "gif" : search}&limit=${limit}&offset=${offset}&rating=g&lang=pt`
      );

      const data = response.data.data;

      
      setGiphy(data);

      setLoading(false);
    }

    loadGiphy();
  }, [page, search])

  // paginação da página home

  function backButton(){
    setLoading(true)
    
    setTimeout(() => {
      setPage(Page => Page - 1)
    }, 1000)
  }

  function nextButton(){
    setLoading(true)
    
    setTimeout(() => {
      setPage(Page => Page + 1)
    }, 1000)
  }
  
  // chamada para atualizar os dois gifs de amostra na pag giphy

  useEffect(() => {
    async function getGiphy() {
      let key = "RBL9rQN0QL4EHnDTJC2kJW8bldXcnxfh&q";
      const response = await api.get(
        `gifs/search?api_key=${key}=search&limit=2&offset=${offset2}&rating=g&lang=pt`
      );

      const newGiphy = response.data.data;
      setViewGiphy(newGiphy);
    }

    getGiphy();
  }, [viewGiphy]);


  return (
    <giphyContexts.Provider
      value={{ giphy, search, setSearch, loading, viewGiphy, setOffset2, nextButton, backButton, page }}
    >
      {children}
    </giphyContexts.Provider>
  );
}

export default GiphyProvider;
