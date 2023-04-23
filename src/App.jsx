function App() {
  return (
    <>
      <div className="bg-very-dark-blue min-h-screen">
        <div className="h-20 flex items-center bg-dark-blue sm:p-4">
          <h1 className="text-white text-base font-extrabold">
            Where in the world?
          </h1>
        </div>

        <form className="  mt-4 mx-4 h-12 bg-dark-blue shadow-md text-white  rounded-lg ">
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
              placeholder="Search for a country..."
              className="pl-12 bg-transparent  border-transparent focus:outline-none focus:border-very-dark-blue focus:ring-1 focus:ring-very-dark-blue w-full h-full placeholder:text-white placeholder:text-small  "
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
