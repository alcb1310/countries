import { createContext, useEffect, useState } from "react";

const CountriesContext = createContext();

function CountriesContextProvider(props) {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setAllCountries(data);
      setFilteredCountries(data);
      setIsLoading(false);
    });
  }, []);

  function searchCountries(searchParam) {
    setFilteredCountries(
      allCountries.filter((country) =>
        country.name.common.toUpperCase().includes(searchParam.toUpperCase())
      )
    );
  }

  function searchByRegion(searchRegion) {
    if (searchRegion === "") {
      setFilteredCountries(allCountries);
    } else {
      setFilteredCountries(
        allCountries.filter((country) => {
          return country.region === searchRegion;
        })
      );
    }
  }

  const info = (
    <CountriesContext.Provider
      value={{
        allCountries: filteredCountries,
        isLoading,
        searchCountries,
        searchByRegion,
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );

  return info;
}

export { CountriesContextProvider, CountriesContext };
