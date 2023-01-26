import React, { useContext, useEffect, useState } from "react";
import FormSearch from "../components/FormSearch";
import { Context } from "../utils/context";

const FetchData = () => {
  const context = useContext(Context);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = setTimeout(() => {
      try {
        fetch("https://dummyjson.com/products/search?q=" + context.input)
          .then((response) => response.json())
          .then((json) => {
            setData(json.products)
          })
          .catch((error) => {
            setError(error.message);
          });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }, 1000);
    return () => {
      clearTimeout(fetchData);
    }
  }, [loading, context.input]);

  const handleChange = (e) => {
    context.setInput(e.target.value);
    setLoading(true);
  };

  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <div className="home">
      <h1>Fetch Data</h1>
      <FormSearch value={context.input} onInput={handleChange} onSubmit={handleSubmit} />
      <p>{context.input === "" ? "" : "Search: " + context.input}</p>
      <ul>
        {loading ? "Loading..." : error ? error : data.length === 0 ? "No data" : data.map((item) => {
          return <li key={item.id}>{item.title}</li>
        })}
      </ul>
    </div>
  );

};

export default FetchData;