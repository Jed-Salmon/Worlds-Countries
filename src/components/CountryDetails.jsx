import { Link } from "react-router-dom";
import { VscArrowSmallLeft } from "react-icons/vsc";
import "../styles/CountryDetails.css";
import Card from "./Card";

// const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

const CountryDetails = ({ country }) => {
  const {
    flags,
    name,
    nativeName,
    population,
    region,
    borders,
    tld,
    capital,
    currencies,
    languages,
    subregion,
  } = country;

  console.log(Object.values(languages));

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
          <img src={flags.svg} alt={`${name.common} flag`} />
        </div>
        <div className="country-info">
          <h1 className="country-name">{name.common}</h1>
          <div className="stats">
            <ul>
              <li>
                <span>Native Name: </span>
                {name.official}
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
                {capital ? (
                  capital.map(
                    (city, index) =>
                      `${city}${index < capital.length - 1 ? ", " : "."}`
                  )
                ) : (
                  <p>N/A</p>
                )}
              </li>
            </ul>

            <ul>
              <li>
                <span>Top Level Domain: </span>
                {tld.map((domain) => domain)}
              </li>
              <li>
                <span>Currencies: </span>
                {currencies !== undefined
                  ? Object.values(currencies)[0].name
                  : "No currencies"}
              </li>
              <li>
                <span>Languages: </span>

                {`${Object.values(languages).join(", ")}`}
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
                <p>{name.common} borders no countries.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;
