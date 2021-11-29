import { useEffect, useState } from "react";

const Search = ({ searchHandler }) => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    searchHandler(searchInput);
  }, [searchInput, searchHandler]);

  const updateSearch = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <div className="icon">S</div>
      <input
        type="text"
        placeholder="search for a country..."
        value={searchInput}
        onChange={updateSearch}
      />
    </div>
  );
};

export default Search;
