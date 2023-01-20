import React from "react";

const FormSearch = (props) => {
  return (
    <form className="form-search" onSubmit={(e) => {
      e.preventDefault();
      props.onSubmit();
    }}>
      <input type="text" id="searchInput" autoComplete="off" placeholder="Search" value={props.value} onInput={(e) => {
        props.onInput(e);
      }} />
      <button type="submit">Search</button>
    </form>
  )
};

export default FormSearch;