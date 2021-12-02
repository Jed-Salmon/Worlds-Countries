import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import CountryDetails from "../components/CountryDetails";

const Details = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

  const fetchCountryDetails = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://restcountries.com/v2/name/${params.country}`
      );
      const data = await res.json();
      setCountry(data[0]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [params.country]);

  useEffect(() => {
    fetchCountryDetails();
  }, [fetchCountryDetails]);

  return (
    <div id="country">
      {/* {countries.map((country) => console.log(country))} */}
      {isLoading && <div className="loading">{<p>Loading...</p>}</div>}
      {!isLoading && country.length === 0 && (
        <p>That country cannot be found</p>
      )}
      {!isLoading && country.length !== 0 && (
        <CountryDetails country={country} />
      )}
    </div>
  );
};

export default Details;
