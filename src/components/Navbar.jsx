import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="h-20 flex items-center bg-dark-blue sm:p-4">
        <Link to="/">
          <h1 className="text-white text-base font-extrabold">
            Where in the world?
          </h1>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
