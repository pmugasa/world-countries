import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Searchbox from "./components/Searchbox";
import Navbar from "./components/Navbar";

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dropdown, setDropDown] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [userInput, setUserInput] = useState("");

  //fetching data from the api
  useEffect(() => {
    function fetchData() {
      axios
        .get("https://restcountries.com/v3.1/all")
        .then((response) => {
          setCountries(response.data);
          setIsLoading(false);
        })
        .catch((error) => alert(error.message));
    }

    fetchData();
  }, []);

  //searching filter

  const searchedCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(userInput.toLowerCase());
  });
  console.log(searchedCountries);
  console.log(userInput);

  function showDropDown() {
    setDropDown(!dropdown);
  }

  //filter by region
  function filterByRegion(region) {
    setDropDown(!dropdown);
    const updatedCountries = countries.filter(
      (country) => country.region.toLowerCase() === region
    );
    setFilteredResults(updatedCountries);
    setIsFilter(true);
  }

  if (isLoading === true) {
    return <h1>App is loading...</h1>;
  }

  return (
    <>
      <div className="bg-very-dark-blue min-h-screen">
        <Navbar />

        <div className="  mt-6 mx-4 h-12 bg-dark-blue shadow-md text-white  rounded-lg ">
          <Searchbox setUserInput={setUserInput} />
        </div>

        {/* dropdown*/}
        <div className="relative">
          <div className="container  mt-6 p-4 w-52 mx-4 h-12 flex items-center bg-dark-blue shadow-md text-white  rounded-lg">
            <button className="flex items-center" onClick={showDropDown}>
              <div>Filter by Region</div>
              <div className="ml-10 mt-2">
                {dropdown === true ? (
                  <ion-icon name="chevron-up-outline" size="small"></ion-icon>
                ) : (
                  <ion-icon name="chevron-down-outline" size="small"></ion-icon>
                )}
              </div>
            </button>
          </div>
          {dropdown === true ? (
            <div className=" absolute z-10 mt-1 p-4 w-52 mx-4 flex items-center bg-dark-blue shadow-md text-white  rounded-lg">
              <ul className="w-full space-y-2">
                <li
                  className="hover:bg-very-dark-blue p-2"
                  onClick={() => filterByRegion("africa")}
                >
                  <a href="#">Africa</a>
                </li>
                <li
                  className="hover:bg-very-dark-blue p-2"
                  onClick={() => filterByRegion("americas")}
                >
                  <a href="#">America</a>
                </li>
                <li
                  className="hover:bg-very-dark-blue p-2"
                  onClick={() => filterByRegion("asia")}
                >
                  <a href="#">Asia</a>
                </li>
                <li
                  className="hover:bg-very-dark-blue p-2"
                  onClick={() => filterByRegion("europe")}
                >
                  <a href="#">Europe</a>
                </li>
                <li
                  className="hover:bg-very-dark-blue p-2"
                  onClick={() => filterByRegion("oceania")}
                >
                  <a href="#">Oceania</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>

        {isFilter === true
          ? filteredResults.map((country) => {
              return <Card key={country.name.common} country={country} />;
            })
          : searchedCountries
          ? searchedCountries.map((country) => {
              return <Card key={country.name.common} country={country} />;
            })
          : countries.map((country) => {
              return <Card key={country.name.common} country={country} />;
            })}
      </div>
    </>
  );
}

export default App;
