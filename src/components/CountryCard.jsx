const CountryCard = ({ flag, name, population, region, capital }) => {
  return (
    <div>
      <img src={flag} alt={`${name} flag`} height="auto" width="200px" />
      <h3>{name}</h3>
      <ul>
        <li>
          <span>population:</span> {population}
        </li>
        <li>
          <span>Region:</span>
          {region}
        </li>
        <li>
          <span>Capital:</span>
          {capital}
        </li>
      </ul>
    </div>
  );
};

export default CountryCard;
