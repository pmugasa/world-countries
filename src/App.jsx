import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Searchbox from "./components/Searchbox";
import Navbar from "./components/Navbar";

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dropdown, setDropDown] = useState(false);
  const [region, setRegion] = useState("");
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
  let result = [];
  function search(e) {
    e.preventDefault();
    console.log("userInput", userInput);
    countries.map((country) => {
      if (country.name.common.toLowerCase().includes(userInput.toLowerCase())) {
        return [...result, country];
      } else {
        return country;
      }
    });
  }

  countries.map((country) => {
    console.log("countries", country.name.common);
  });

  function showDropDown() {
    setDropDown(!dropdown);
  }

  function filterByRegion(item) {
    setRegion(item);
    console.log(region);
  }
  if (isLoading === true) {
    return <h1>App is loading...</h1>;
  }

  return (
    <>
      <div className="bg-very-dark-blue min-h-screen">
        <Navbar />

        <form
          className="  mt-6 mx-4 h-12 bg-dark-blue shadow-md text-white  rounded-lg "
          onSubmit={search}
        >
          <Searchbox setUserInput={setUserInput} />
        </form>

        {/* dropdown*/}
        <div className="relative">
          <div className="container  mt-6 p-4 w-52 mx-4 h-12 flex items-center bg-dark-blue shadow-md text-white  rounded-lg">
            <button className="flex items-center" onClick={showDropDown}>
              <div>Filter by Region</div>
              <div className="ml-10 mt-2">
                <ion-icon name="chevron-down-outline" size="small"></ion-icon>
              </div>
            </button>
          </div>
          {dropdown === true ? (
            <div className=" absolute z-10 mt-1 p-4 w-52 mx-4 flex items-center bg-dark-blue shadow-md text-white  rounded-lg">
              <ul className="w-full">
                <li
                  className="hover:bg-very-dark-blue"
                  onClick={() => filterByRegion("africa")}
                >
                  <a href="#">Africa</a>
                </li>
                <li
                  className="hover:bg-very-dark-blue"
                  onClick={() => filterByRegion("america")}
                >
                  <a href="#">America</a>
                </li>
                <li
                  className="hover:bg-very-dark-blue"
                  onClick={() => filterByRegion("asia")}
                >
                  <a href="#">Asia</a>
                </li>
                <li
                  className="hover:bg-very-dark-blue"
                  onClick={() => filterByRegion("europe")}
                >
                  <a href="#">Europe</a>
                </li>
                <li
                  className="hover:bg-very-dark-blue"
                  onClick={() => filterByRegion("ocenia")}
                >
                  <a href="#">Oceania</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>

        {countries.map((country) => {
          return <Card key={country.name.common} country={country} />;
        })}
      </div>
    </>
  );
}

export default App;
