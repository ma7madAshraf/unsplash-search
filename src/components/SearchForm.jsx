import axios from "axios";
import React from "react";
import { useAppContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useAppContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.elements.search.value);
  };

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          className="form-input search-input"
          placeholder="sea"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
