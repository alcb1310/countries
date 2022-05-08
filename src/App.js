import CountryDetail from "./components/CountryDetail";
import CountryList from "./components/CountryList";
import Header from "./components/Header";
import { CountriesContextProvider } from "./context/CountriesContext";
import { Routes, Route } from "react-router-dom";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <CountriesContextProvider>
        <Routes>
          <Route exact path="/" element={<CountryList />} />
          <Route path="/:cca3" element={<CountryDetail />} />
        </Routes>
      </CountriesContextProvider>
    </div>
  );
}

export default App;
