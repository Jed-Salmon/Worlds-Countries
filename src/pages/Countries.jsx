import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import Filter from "../components/Filter";
import Search from "../components/Search";

const Homepage = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div>
      <Search searchHandler={handleSearch} />
      <Filter filterHandler={handleFilter} />
      {/* {countries.map((country) => console.log(country))} */}
      <div className="country-grid">
        {countries.map((country) => (
          <CountryCard
            flag={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
