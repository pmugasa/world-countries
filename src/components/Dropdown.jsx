function Dropdown({ setDropDown, dropdown, filterByRegion }) {
  function showDropDown() {
    setDropDown(!dropdown);
  }
  return (
    <>
      <div className="relative">
        <div className="container  mt-6 p-4 w-52 mx-4 h-12 flex items-center bg-dark-blue shadow-md text-white  rounded-lg">
          <button className="flex items-center" onClick={showDropDown}>
            <div>Filter by Region</div>
            <div className="ml-10 mt-2">
              {dropdown === true ? (
                <ion-icon name="chevron-up-outline" size="small"></ion-icon>
              ) : (
                <ion-icon name="chevron-down-outline" size="small"></ion-icon>
              )}
            </div>
          </button>
        </div>
        {dropdown === true ? (
          <div className=" absolute z-10 mt-1 p-4 w-52 mx-4 flex items-center bg-dark-blue shadow-md text-white  rounded-lg">
            <ul className="w-full space-y-2">
              <li
                className="hover:bg-very-dark-blue p-2"
                onClick={() => filterByRegion("africa")}
              >
                <a href="#">Africa</a>
              </li>
              <li
                className="hover:bg-very-dark-blue p-2"
                onClick={() => filterByRegion("americas")}
              >
                <a href="#">America</a>
              </li>
              <li
                className="hover:bg-very-dark-blue p-2"
                onClick={() => filterByRegion("asia")}
              >
                <a href="#">Asia</a>
              </li>
              <li
                className="hover:bg-very-dark-blue p-2"
                onClick={() => filterByRegion("europe")}
              >
                <a href="#">Europe</a>
              </li>
              <li
                className="hover:bg-very-dark-blue p-2"
                onClick={() => filterByRegion("oceania")}
              >
                <a href="#">Oceania</a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}
export default Dropdown;
