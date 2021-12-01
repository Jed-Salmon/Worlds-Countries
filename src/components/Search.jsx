import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../styles/Search.css";

const Search = ({ searchHandler }) => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    searchHandler(searchInput);
  }, [searchInput, searchHandler]);

  const updateSearch = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="search-bar">
      <div className="icon">
        <AiOutlineSearch />
      </div>
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
