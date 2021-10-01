import React from "react";

const Search = () => {
  return (
    <div className="search-conteiner">
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="number"
        />
        <label htmlFor="floatingInput">上段のバーコード(ISBN-13)</label>
      </div>
    </div>
  );
};

export default Search;
