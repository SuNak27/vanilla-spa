import React, { useEffect, useState } from "react";
import FormSearch from "../components/FormSearch";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = setTimeout(() => {
      try {
        fetch("https://dummyjson.com/products/search?q=" + inputValue)
          .then((response) => response.json())
          .then((json) => setData(json.products))
          .catch((error) => setError(error.message));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }, 1000);
    return () => {
      clearTimeout(fetchData);
    }
  }, [loading, inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setLoading(true);
  };

  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <div className="home">
      <h1>Fetch Data</h1>
      <FormSearch value={inputValue} onInput={handleChange} onSubmit={handleSubmit} />
      <p>{inputValue === "" ? "" : "Search: " + inputValue}</p>
      <ul>
        {loading ? "Loading..." : error ? error : data.length === 0 ? "No data" : data.map((item) => {
          return <li key={item.id}>{item.title}</li>
        })}
      </ul>
    </div>
  );

};

export default FetchData;