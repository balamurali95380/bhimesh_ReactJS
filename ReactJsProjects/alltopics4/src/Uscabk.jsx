import React, { useState, useCallback } from "react";

const SearchComponent = () => {
  const [query, setQuery] = useState("");

  const handleSearch = useCallback(() => {
    console.log("Fetching results for:", query);
    // Simulate API call
  }, [query]);

  return (
    <div>
      <h2>Search</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchComponent;