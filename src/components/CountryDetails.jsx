import { Link } from "react-router-dom";
import { VscArrowSmallLeft } from "react-icons/vsc";
import "../styles/CountryDetails.css";
import Card from "./Card";

// const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

const CountryDetails = ({ country }) => {
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    borders,
    topLevelDomain,
    capital,
    currencies,
    languages,
    subregion,
  } = country;

  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Card className="back-btn">
          <span className="icon">
            <VscArrowSmallLeft />
          </span>
          Back
        </Card>
      </Link>
      <div className="country">
        <div className="flag">
          <img src={flag} alt={`${name} flag`} />
        </div>
        <div className="country-info">
          <h1 className="country-name">{name}</h1>
          <div className="stats">
            <ul>
              <li>
                <span>Native Name: </span>
                {nativeName}
              </li>
              <li>
                <span>Population: </span>
                {population.toLocaleString("en-US")}
              </li>
              <li>
                <span>Region: </span>
                {region}
              </li>
              <li>
                <span>Sub Region: </span>
                {subregion}
              </li>
              <li>
                <span>Capital: </span>
                {capital}
              </li>
            </ul>

            <ul>
              <li>
                <span>Top Level Domain: </span>
                {topLevelDomain}
              </li>
              <li>
                <span>Currencies: </span>
                {currencies !== undefined
                  ? currencies.map((currency) => currency.name)
                  : "No currencies"}
              </li>
              <li>
                <span>Languages: </span>
                {languages.map((language, index) => (
                  <span key={index} className="lang">
                    {`${language.name}${
                      index < languages.length - 1 ? ", " : ""
                    }`}
                  </span>
                ))}
              </li>
            </ul>
          </div>

          <div className="bordering">
            <h4>Border Countries:</h4>
            <div className="border-countries">
              {borders !== undefined ? (
                borders.map((country, index) => (
                  <Card key={index}>
                    {/* {regionNames.of(country)} */}
                    <div className="country-code">{country}</div>
                  </Card>
                ))
              ) : (
                <p>{name} borders no countries.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;
