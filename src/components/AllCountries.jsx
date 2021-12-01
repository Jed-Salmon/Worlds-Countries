import CountryCard from "../components/CountryCard";
import "../styles/AllCountries.css";

const AllCountries = ({ countries }) => {
  // console.log(countries);
  return (
    <div className="country-grid">
      {countries.map((country) => (
        <CountryCard
          key={country.name}
          flag={country.flag}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </div>
  );
};

export default AllCountries;
