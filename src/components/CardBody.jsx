function CardBody({ country }) {
  const population = country.population;
  function numberWithCommas(n) {
    return n.toLocaleString();
  }
  return (
    <>
      <div>
        <p className="font-semibold text-sm mt-6">
          Population:
          <span className="ml-2 font-light text-sm">
            {numberWithCommas(population)}
          </span>
        </p>
        <p className="font-semibold text-sm">
          Region:
          <span className="ml-2 font-light text-sm">{country.region}</span>
        </p>
        <p className="font-semibold text-sm">
          Capital:
          <span className="ml-2 font-light text-sm">{country.capital}</span>
        </p>
      </div>
    </>
  );
}

export default CardBody;
