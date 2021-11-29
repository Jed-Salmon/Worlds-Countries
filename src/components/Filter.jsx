import { useRef } from "react";

const Filter = ({ filterHandler }) => {
  const selectRef = useRef();

  const filterRegion = () => {
    filterHandler(selectRef.current.value);
  };

  return (
    <div>
      <select name="region-filter" ref={selectRef} onChange={filterRegion}>
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
