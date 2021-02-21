import React from "react";

function Search(props) {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Start typing to find employee"
          id="search"
        />
        <br />
      </div>
    </form>
  );
}

export default Search;
