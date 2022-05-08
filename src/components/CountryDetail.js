import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { CountriesContext } from "../context/CountriesContext";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";

function CountryDetail() {
  const { allCountries, isLoading } = useContext(CountriesContext);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const { cca3 } = useParams();

  useEffect(() => {
    const data = allCountries.filter((country) => country.cca3 === cca3);
    setSelectedCountry(data[0]);
  }, [allCountries]);

  if (!selectedCountry) {
    return <h3>Loading ...</h3>;
  }

  const key = Object.keys(selectedCountry.name.nativeName);
  const nativeName = selectedCountry.name.nativeName[key[0]].common;

  const currenciesObject = selectedCountry.currencies;
  const currenciesKeys = Object.keys(currenciesObject);
  const currencies = currenciesKeys.map((key) => currenciesObject[key].name);

  const languagesObject = selectedCountry.languages;
  const languagesKeys = Object.keys(languagesObject);
  const languages = languagesKeys.map((key) => languagesObject[key]);

  const bordersArray = selectedCountry.borders;
  const borders = bordersArray.map((border) =>
    allCountries.filter((country) => country.cca3 === border)
  );

  const bordersEl = borders.map((border) => (
    <button className="btn">{border[0].name.common}</button>
  ));

  const display = isLoading ? (
    <h3>Loading ...</h3>
  ) : (
    <div>
      <Link className="btn back" to="/">
        <FontAwesomeIcon icon={faArrowLeftLong} className="arrow" />
        Back
      </Link>
      <div className="app-country detail">
        <div className="app-country__description one">
          <h3 className="app-country__name big">
            {selectedCountry.name.common}
          </h3>
          <p className="app-country__text">
            <strong>Native Name:</strong> {nativeName}
          </p>
          <p className="app-country__text">
            <strong>Population:</strong>{" "}
            {selectedCountry.population.toLocaleString()}
          </p>
          <p className="app-country__text">
            <strong>Region:</strong> {selectedCountry.region}
          </p>
          <p className="app-country__text">
            <strong>Sub Region:</strong> {selectedCountry.subregion}
          </p>
          <p className="app-country__text">
            <strong>Capital:</strong> {selectedCountry.capital}
          </p>
        </div>
        <div className="app-country__description two">
          <p className="app-country__text">
            <strong>Top Level Domain:</strong> {selectedCountry.tld}
          </p>
          <p className="app-country__text">
            <strong>Currencies:</strong> {currencies.join()}
          </p>
          <p className="app-country__text">
            <strong>Languages:</strong> {languages.join()}
          </p>
        </div>
        <div className="app-country__buttons">
          <p className="app-country__text">Border Countries:</p>
          <div className="buttons">{bordersEl}</div>
        </div>
        <img
          className="app-country__flag"
          src={selectedCountry.flags.svg}
          alt={`${selectedCountry.name.common} flag`}
        />
      </div>
    </div>
  );

  return display;
}

export default CountryDetail;
