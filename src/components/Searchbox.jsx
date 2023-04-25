function Searchbox({ setUserInput }) {
  return (
    <>
      <div className="  mt-6 mx-4 h-12 bg-dark-blue shadow-md text-white  rounded-lg ">
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
            autoComplete="off"
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Search for a country..."
            className="pl-12 bg-transparent  border-transparent focus:outline-none focus:border-very-dark-blue focus:ring-1 focus:ring-very-dark-blue w-full h-full placeholder:text-white placeholder:text-small  "
          />
        </div>
      </div>
    </>
  );
}

export default Searchbox;
