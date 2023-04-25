import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import CardBody from "./CardBody";

function Card({ country }) {
  return (
    <>
      <div className=" mt-10  bg-dark-blue text-sm text-white w-72 h-96  mx-auto rounded-lg shadow-3xl shadow-black">
        <CardImage country={country} />

        <div className="text container mt-6 p-4 h-3/5 space-y-4">
          <CardTitle country={country} />
          <CardBody country={country} />
        </div>
      </div>
    </>
  );
}
export default Card;
