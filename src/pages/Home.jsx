import Searchbox from "../components/Searchbox";
import Dropdown from "../components/Dropdown";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home({ countries, setCountries }) {
  const [dropdown, setDropDown] = useState(false);
  const [searchedCountries, setSearchedCountries] = useState(countries);

  //searching filter
  function search(query) {
    const updatedCountries = countries.filter((country) => {
      return country.name.common.toLowerCase().includes(query.toLowerCase());
    });
    setSearchedCountries(updatedCountries);
  }

  //filter by region
  function filterByRegion(region) {
    const updatedCountries = countries.filter((country) => {
      return country.region.toLowerCase() === region;
    });
    setDropDown(false);
    setSearchedCountries(updatedCountries);
  }
  return (
    <>
      <Navbar />
      <div className="md:flex ">
        <div className="md:w-full">
          <Searchbox search={search} />
        </div>

        <Dropdown
          filterByRegion={filterByRegion}
          setDropDown={setDropDown}
          dropdown={dropdown}
        />
      </div>

      <div className="md:grid md:grid-cols-4 md:gap-4">
        {searchedCountries.map((country) => {
          return (
            <div key={country.name.common}>
              <Link to={`/countries/${country.name.common}`}>
                <Card country={country} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Home;
