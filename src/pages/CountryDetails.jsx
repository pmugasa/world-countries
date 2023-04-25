import { useParams, Link } from "react-router-dom";

function CountryDetails({ countries }) {
  const name = useParams().name;
  const country = countries.find((c) => c.name.common === name);

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
      <div className="container text-white p-4">
        <div className="">
          <Link
            to="/"
            className="bg-dark-blue px-2 py-2 border-2 border-very-dark-blue shadow-xl rounded-md hover:bg-very-dark-blue hover:border hover:border-dark-blue w-24"
          >
            <ion-icon name="arrow-back-outline" className=""></ion-icon> Back
          </Link>
        </div>
        <div className="mt-4">
          <img src={country.flags.png} alt="country-flag" />
        </div>
        <div>
          <h2 className="text-lg font-extrabold mt-8">{country.name.common}</h2>
        </div>
        <div className="mt-4 font-semibold">
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
            Sub Region: <span className="font-normal">{country.subregion}</span>
          </p>
          <p>
            Capital:{" "}
            <span className="font-normal">{country.capital.toString()}</span>
          </p>
        </div>
        <div className="mt-4 font-semibold">
          <p>
            Top Level Domain: <span className="font-normal">{country.tld}</span>
          </p>
          <p>
            Currencies: <span className="font-normal">{currency}</span>
          </p>
          <p>
            Langues: <span className="font-normal">{languages.toString()}</span>
          </p>
        </div>
        {neighbors === undefined ? null : (
          <div className="mt-16 font-semibold">
            <h3>Border countries</h3>
            <div className="grid grid-cols-3 gap-4 justify-evenly text-sm font-normal mt-4">
              {neighbors.map((border) => (
                <Link
                  to={`/countries/${border.name.common}`}
                  key={border.name.common}
                  className="bg-dark-blue px-2 py-2 border-2 border-very-dark-blue shadow-xl rounded-md hover:bg-very-dark-blue hover:border hover:border-dark-blue"
                >
                  <p className="">{border.name.common}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default CountryDetails;