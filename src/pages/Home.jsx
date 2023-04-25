import Searchbox from "../components/Searchbox";
import Dropdown from "../components/Dropdown";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home({ countries }) {
  const [userInput, setUserInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [dropdown, setDropDown] = useState(false);

  //searching filter
  const searchedCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(userInput.toLowerCase());
  });
  //filter by region
  function filterByRegion(region) {
    setDropDown(!dropdown);
    const updatedCountries = countries.filter(
      (country) => country.region.toLowerCase() === region
    );
    setFilteredResults(updatedCountries);
    setIsFilter(true);
  }
  return (
    <>
      <Navbar />
      <Searchbox setUserInput={setUserInput} />
      <Dropdown
        filterByRegion={filterByRegion}
        setDropDown={setDropDown}
        dropdown={dropdown}
      />
      {searchedCountries
        ? searchedCountries.map((country) => {
            return (
              <div key={country.name.common}>
                <Link to={`/countries/${country.name.common}`}>
                  <Card country={country} />
                </Link>
              </div>
            );
          })
        : isFilter === true
        ? filteredResults.map((country) => {
            return (
              <div key={country.name.common}>
                <Link to={`/countries/${country.name.common}`}>
                  <Card country={country} />
                </Link>
              </div>
            );
          })
        : countries.map((country) => {
            return (
              <div key={country.name.common}>
                <Link to={`/countries/${country.name.common}`}>
                  <Card country={country} />
                </Link>
              </div>
            );
          })}
    </>
  );
}
export default Home;
