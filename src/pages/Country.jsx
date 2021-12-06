import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import CountryDetails from "../components/CountryDetails";
import LoadingSpinner from "../components/LoadingSpinner";

const Details = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  console.log(params);

  const fetchCountryDetails = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://restcountries.com/v2/name/${params.country.replace(/-/g, " ")}`
      );
      const data = await res.json();
      const [countryData] = data;
      console.log(countryData);
      setCountry(countryData);
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
      {isLoading && <LoadingSpinner />}
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
