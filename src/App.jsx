import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  //fetching data from the api
  useEffect(() => {
    function fetchData() {
      axios
        .get("https://restcountries.com/v3.1/all")
        .then((response) => {
          console.log("name", response.data[20].name.common);
          console.log("capital", response.data[20].capital);
          console.log("region", response.data[20].region);
          console.log("population", response.data[20].population);
          console.log("flag", response.data[20].flags.png);
          setCountries(response.data);
        })
        .catch((error) => alert(error.message));
    }

    fetchData();
  }, []);

  if (countries.length > 0) {
    countries.forEach((country) => {
      console.log(country);
    });
  } else {
    console.log("loading...");
  }

  return (
    <>
      <div className="bg-very-dark-blue min-h-screen">
        <div className="h-20 flex items-center bg-dark-blue sm:p-4">
          <h1 className="text-white text-base font-extrabold">
            Where in the world?
          </h1>
        </div>

        <form className="  mt-6 mx-4 h-12 bg-dark-blue shadow-md text-white  rounded-lg ">
          <div className="relative flex items-center w-full h-full">
            <div className="absolute flex items-center pl-4">
              <ion-icon
                name="search-outline"
                size="small"
                className=" pointer-events-none ml-4"
              ></ion-icon>
            </div>
            <input
              type="search"
              placeholder="Search for a country..."
              className="pl-12 bg-transparent  border-transparent focus:outline-none focus:border-very-dark-blue focus:ring-1 focus:ring-very-dark-blue w-full h-full placeholder:text-white placeholder:text-small  "
            />
          </div>
        </form>

        {/* dropdown*/}
        <div className="relative">
          <div className="container  mt-6 p-4 w-52 mx-4 h-12 flex items-center bg-dark-blue shadow-md text-white  rounded-lg">
            <button className="flex items-center">
              <div>Filter by Region</div>
              <div className="ml-10 mt-2">
                <ion-icon name="chevron-down-outline" size="small"></ion-icon>
              </div>
            </button>
          </div>
          <div className=" absolute z-10 mt-1 p-4 w-52 mx-4 flex items-center bg-dark-blue shadow-md text-white  rounded-lg">
            <ul className="w-full">
              <li className="hover:bg-very-dark-blue">
                <a href="#">Africa</a>
              </li>
              <li className="hover:bg-very-dark-blue">
                <a href="#">America</a>
              </li>
              <li className="hover:bg-very-dark-blue">
                <a href="#">Asia</a>
              </li>
              <li className="hover:bg-very-dark-blue">
                <a href="#">Europe</a>
              </li>
              <li className="hover:bg-very-dark-blue">
                <a href="#">Oceania</a>
              </li>
            </ul>
          </div>
        </div>

        {/*card*/}
        <div className="container mt-10  bg-dark-blue text-sm text-white w-72 h-80  mx-auto rounded-lg shadow-3xl shadow-black">
          <div className="img container ">
            <img src="https://flagcdn.com/w320/bs.png" alt="country-flag" />
          </div>
          <div className="text container p-4 space-y-4">
            <h2 className="font-extrabold text-base">Germany</h2>
            <p className="font-semibold text-sm mt-6">
              Population: <span className="font-light text-sm">81,770,900</span>
            </p>
            <p className="font-semibold text-sm">
              Region: <span className="font-light text-sm">Europe</span>
            </p>
            <p className="font-semibold text-sm">
              Capital: <span className="font-light text-sm">Berlin</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
