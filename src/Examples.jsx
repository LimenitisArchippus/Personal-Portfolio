function Examples() {
  return (
    <>
      <section id="products">
        <h2 className="text-2xl font-semibold text-gray-800 m-6 p-3 text-center bg-aliceblue rounded-lg shadow-md">
          Examples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-aliceblue rounded-lg shadow-md p-4 ml-3 mr-3 flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Javascript Website From SWDV-140
            </h3>
            <img
              className="mb-2"
              src="src/Images/TreeSite.png"
              alt="Forestry Website Image"
            />
            <p className="text-gray-700 font-bold mb-2">
              Assignment Containing Javascript from SWDV-140
            </p>
            <a
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out text-center"
              href="https://limenitisarchippus.github.io/intermediateWebAppDevProject4/websiteFiles/home.html"
            >
              <button className="">Link To Repository</button>
            </a>
          </div>
          <div className="bg-aliceblue rounded-lg shadow-md p-4 ml-3 mr-3 flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Flamingo Motorcycle Insurance
            </h3>
            <img
              className="mb-2"
              src="src/Images/MotorcycleInsurance.png"
              alt="Flamingo Motorcycle Insurance Website Image"
            />
            <p className="text-gray-700 font-bold mb-2">
              Bootstraps Example Site
            </p>
            <a
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out text-center"
              href="https://limenitisarchippus.github.io/ClientSideFrameworksProject1/index.html"
            >
              <button className="">Link To Repository</button>
            </a>
          </div>
          <div className="bg-aliceblue rounded-lg shadow-md p-4 ml-3 mr-3 flex flex-col justify-between mb-14">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Computer Store Website
            </h3>
            <img
              className="mb-2"
              src="src/Images/ComputerWebsite.png"
              alt="Computer Website Image"
            />
            <p className="text-gray-700 font-bold mb-2">
              React Framework Example
            </p>
            <a
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out text-center"
              href="https://limenitisarchippus.github.io/ClientSideFrameworksProject3/index.html"
            >
              <button className="">Link To Repository</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Examples;
