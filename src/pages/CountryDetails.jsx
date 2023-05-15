import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function CountryDetails({ countries }) {
  const name = useParams().name;
  const country = countries.find((c) => c.name.common === name);

  const navigate = useNavigate();

  console.log(country);
  let currency;
  const currencies = country.currencies;
  for (const currencyCode in currencies) {
    currency = currencies[currencyCode].name;
  }

  let nativeName;

  const native = country.name.nativeName;
  for (const n in native) {
    nativeName = native[n].common;
  }

  let neighbors = [];
  if (country.borders !== undefined) {
    const borders = country.borders;
    borders.forEach((border) => {
      const results = countries.find((c) => c.cca3 === border);
      neighbors.push(results);
    });
  }

  let languages = Object.values(country.languages);

  console.log(languages);
  if (currency && nativeName === undefined) {
    return <h1>data loading...</h1>;
  }
  return (
    <>
      <Navbar />
      <div className="container text-white p-6  min-h-screen min-w-screen overflow-hidden">
        <div className="">
          <button
            className="bg-dark-blue px-2 py-2 border-2 border-very-dark-blue shadow-xl rounded-md hover:bg-very-dark-blue hover:border hover:border-dark-blue w-24"
            onClick={() => navigate(-1)}
          >
            <ion-icon name="arrow-back-outline" className=""></ion-icon> Back
          </button>
        </div>
        <div className="md:flex md:flex-row md:h-96 md:overflow-hidden md:space-x-8 md:text-sm w-full">
          <div className="mt-4 md:w-1/2 ">
            <img
              src={country.flags.png}
              alt="country-flag"
              className="w-full h-full  object-cover"
            />
          </div>
          <div className="md:w-1/2 md:text-sm md:h-full md:mt-8  ">
            <div className="">
              <h2 className="text-lg font-extrabold mt-8 md:my-2">
                {country.name.common}
              </h2>
            </div>
            <div className="mt-4 md:mt-1 font-semibold md:my-2 ">
              <p>
                Native Name: <span className="font-normal">{nativeName}</span>
              </p>
              <p>
                Population:{" "}
                <span className="font-normal">
                  {country.population.toLocaleString()}
                </span>
              </p>
              <p>
                Regions: <span className="font-normal">{country.region}</span>
              </p>
              <p>
                Sub Region:{" "}
                <span className="font-normal">{country.subregion}</span>
              </p>
              <p>
                Capital:{" "}
                <span className="font-normal">
                  {country.capital.toString()}
                </span>
              </p>
            </div>
            <div className="mt-4 md:mt-1 font-semibold md:my-2">
              <p>
                Top Level Domain:{" "}
                <span className="font-normal">{country.tld}</span>
              </p>
              <p>
                Currencies: <span className="font-normal">{currency}</span>
              </p>
              <p>
                Langues:{" "}
                <span className="font-normal">{languages.toString()}</span>
              </p>
            </div>
            {neighbors === undefined ? null : (
              <div className="mt-16 md:mt-1 font-semibold md:flex md:items-start md:space-x-8">
                <h3 className="md:mt-4 md:w-1/5">Border countries:</h3>
                <div className="md:w-4/5 grid grid-cols-3 gap-2 md:grid-cols-5  justify-evenly text-xs  font-normal mt-4 ">
                  {neighbors.map((border) => (
                    <Link
                      key={border.name.common}
                      to={`/countries/${border.name.common}`}
                      className="bg-dark-blue truncate  text-center py-2 h-12 md:h-8   border-2 border-very-dark-blue shadow-xl rounded-md hover:bg-very-dark-blue hover:border hover:border-dark-blue"
                    >
                      {border.name.common}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default CountryDetails;
