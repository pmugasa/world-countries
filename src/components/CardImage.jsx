function CardImage({ country }) {
  return (
    <div className="h-2/5 overflow-hidden">
      <img
        src={country.flags.png}
        alt="country-flag"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
export default CardImage;
