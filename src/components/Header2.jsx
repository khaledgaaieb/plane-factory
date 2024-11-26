export default function Header2() {
  return (
    <section className="py-14 md:py-24 bg-white text-zinc-900 relative overflow-hidden z-10">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-12">
          <div className="w-full lg:w-1/2 lg:order-2">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-2xl h-full min-h-[400px] lg:h-[600px]"
              style={{
                backgroundImage:
                  "url(https://cdn.easyfrontend.com/pictures/portfolio/portfolio25.jpg)",
              }}
            ></div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center md:items-start justify-center">
            <div className="px-6 mt-12 lg:mt-0">
              <h1 className="text-3xl font-bold leading-tight md:text-[45px] mb-4">
                Moving signs heaven us darkness
              </h1>
              <p className="text-lg opacity-80 leading-7 mb-6">
                Bearing bearing every deep. Abundantly first together beginning
                moving cattle form whose great Fowl very give land firmament
                created firmament meat make meat years and deep shall moving
                likeness, firmament.
              </p>
              <button className="text-white bg-blue-600 py-3 px-6 rounded hover:bg-opacity-90">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
