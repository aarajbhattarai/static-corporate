export function SecondaryFeatures() {
  return (
    <section className="text-slate-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-4xl font-display text-center mb-12">Choose your Destination</h2>
        <div className="flex flex-wrap justify-center -m-4">
          <div className="lg:w-1/3 md:w-1/2 p-4">
            <div className="flex items-center justify-center">
              <a className="block relative overflow-hidden rounded-lg transform transition duration-300 hover:scale-105">
                <img
                  alt="Australia"
                  className="object-cover object-center w-64 h-48"
                  src="https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg"
                />
                <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-80 text-center py-2">
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Australia
                  </h2>
                </div>
              </a>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 p-4">
            <div className="flex items-center justify-center">
              <a className="block relative overflow-hidden rounded-lg transform transition duration-300 hover:scale-105">
                <img
                  alt="United States"
                  className="object-cover object-center w-64 h-48"
                  src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                />
                <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-80 text-center py-2">
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    United States
                  </h2>
                </div>
              </a>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 p-4">
            <div className="flex items-center justify-center">
              <a className="block relative overflow-hidden rounded-lg transform transition duration-300 hover:scale-105">
                <img
                  alt="New Zealand"
                  className="object-cover object-center w-64 h-48"
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg"
                />
                <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-80 text-center py-2">
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    New Zealand
                  </h2>
                </div>
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-1/2 p-4">
            <div className="flex items-center justify-center">
              <a className="block relative overflow-hidden rounded-lg transform transition duration-300 hover:scale-105">
                <img
                  alt="United Kingdom"
                  className="object-cover object-center w-64 h-48"
                  src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                />
                <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-80 text-center py-2">
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    United Kingdom
                  </h2>
                </div>
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-1/2 p-4">
            <div className="flex items-center justify-center">
              <a className="block relative overflow-hidden rounded-lg transform transition duration-300 hover:scale-105">
                <img
                  alt="Canada"
                  className="object-cover object-center w-64 h-48"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg"
                />
                <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-80 text-center py-2">
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Canada
                  </h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
