import { useState } from "react";

function Card({ country }) {
  const [population, setPopulation] = useState(country.population);
  function numberWithCommas(n) {
    return n.toLocaleString();
  }

  return (
    <>
      <div className=" mt-10  bg-dark-blue text-sm text-white w-72 h-96  mx-auto rounded-lg shadow-3xl shadow-black">
        <div className="h-2/5 overflow-hidden">
          <img
            src={country.flags.png}
            alt="country-flag"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text container mt-6 p-4 h-3/5 space-y-4">
          <h2 className="font-extrabold text-base">{country.name.common}</h2>
          <p className="font-semibold text-sm mt-6">
            Population:{" "}
            <span className="ml-2 font-light text-sm">
              {numberWithCommas(population)}
            </span>
          </p>
          <p className="font-semibold text-sm">
            Region:{" "}
            <span className="ml-2 font-light text-sm">{country.region}</span>
          </p>
          <p className="font-semibold text-sm">
            Capital:
            <span className="ml-2 font-light text-sm">{country.capital}</span>
          </p>
        </div>
      </div>
    </>
  );
}
export default Card;
