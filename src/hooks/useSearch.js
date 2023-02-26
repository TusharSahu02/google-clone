import React, { useState, useEffect } from "react";
import { REACT_APP_SEARCH_KEY, REACT_APP_SEARCH_ENGINE_KEY } from "../ApiKey";
import axios from "axios";

const BASE_URL = "https://customsearch.googleapis.com/customsearch/v1";

const API_KEY = REACT_APP_SEARCH_KEY;
const SEARCH_ENGINE_KEY = REACT_APP_SEARCH_ENGINE_KEY;

const useSearch = (searchTerm) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${BASE_URL}?key=${API_KEY}&cx=${SEARCH_ENGINE_KEY}&q=${searchTerm}`
      );
      setData(response?.data);
    };
    fetchData();
  }, [searchTerm]);
  return {
    data,
  };
};

export default useSearch;
