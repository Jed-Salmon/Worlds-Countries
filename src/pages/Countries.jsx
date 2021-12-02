import { useEffect, useState } from "react";
import AllCountries from "../components/AllCountries";
import Filter from "../components/Filter";
import Search from "../components/Search";
import "../styles/Countries.css";

const Homepage = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(countries);

  const handleSearch = (userInput) => {
    console.log(userInput);
  };

  const handleFilter = (userOption) => {
    console.log(userOption);
  };

  const fetchCountries = async () => {
    setIsLoading(false);
    try {
      const res = await fetch("https://restcountries.com/v2/all");
      setIsLoading(true);
      const data = await res.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div>
      <div className="filters">
        <Search searchHandler={handleSearch} />
        <Filter filterHandler={handleFilter} />
      </div>
      {/* {countries.map((country) => console.log(country))} */}
      <div className="loading">{isLoading && <p>Loading...</p>}</div>
      {!isLoading && countries.length !== 0 && (
        <AllCountries countries={countries} />
      )}
    </div>
  );
};

export default Homepage;
