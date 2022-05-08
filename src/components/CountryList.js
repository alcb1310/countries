import CountryCard from "./CountryCard";
import { CountriesContext } from "../context/CountriesContext";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function CountryList() {
  const [search, setSearch] = useState("");
  const [regionSearch, setRegionSearch] = useState("");

  const { allCountries, isLoading, searchCountries, searchByRegion } =
    useContext(CountriesContext);

  const countryEl = allCountries.map((country) => (
    <CountryCard country={country} key={country.cca3} />
  ));

  function handleChange(event) {
    setSearch(event.target.value);
    searchCountries(event.target.value);
  }

  function selectRegion(event) {
    setRegionSearch(event.target.value);
    searchByRegion(event.target.value);
  }

  return (
    <div>
      <div className="app-search__container">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="app-search__icon"
        />
        <input
          type="text"
          className="app-search"
          value={search}
          onChange={handleChange}
          placeholder="Search for a country"
        />
        <select
          className="app-search__select"
          value={regionSearch}
          onChange={selectRegion}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="app-country-list">
        {isLoading ? <h3 className="app-loading">Loading ....</h3> : countryEl}
      </div>
    </div>
  );
}

export default CountryList;
