import React from "react";

export default function SearchForm() {
  
  return (
    <section className="search-form">
      <form>
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
        />
      </form>
      </section>
  );
}  
  
