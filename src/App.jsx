import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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

  if (isLoading === true) {
    return <h1>App is loading...</h1>;
  }

  return (
    <>
      <div className="bg-very-dark-blue min-h-screen">
        <Router>
          <Routes>
            <Route path="/" element={<Home countries={countries} />} />
            <Route
              path="/countries/:name"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
