import { Link } from "react-router-dom";

function CountryCard(props) {
  return (
    <Link to={`/${props.country.cca3}`} className="app-country">
      <div className="app-country__description">
        <h3 className="app-country__name">{props.country.name.common}</h3>
        <p className="app-country__text">
          <strong>Population:</strong>{" "}
          {props.country.population.toLocaleString()}
        </p>
        <p className="app-country__text">
          <strong>Region:</strong> {props.country.region}
        </p>
        <p className="app-country__text">
          <strong>Capital:</strong> {props.country.capital}
        </p>
      </div>
      <img
        className="app-country__flag"
        src={props.country.flags.svg}
        alt={`${props.country.name.common} flag`}
      />
    </Link>
  );
}

export default CountryCard;
