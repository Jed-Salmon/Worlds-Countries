import Card from "./Card";
import { Link } from "react-router-dom";
import "../styles/CountryCard.css";

const CountryCard = ({ flag, name, population, region, capital }) => {
  return (
    <Card>
      <div className="country-card">
        <div className="flag">
          <Link to={`/${name.replace(/\s+/g, "-")}`}>
            <img src={flag} alt={`${name} flag`} />
          </Link>
        </div>
        <div className="country-info">
          <h3>{name}</h3>
          <ul>
            <li>
              <span>population: </span>
              {population.toLocaleString("en-US")}
            </li>
            <li>
              <span>Region: </span>
              {region}
            </li>
            <li>
              <span>Capital: </span>
              {capital}
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default CountryCard;
