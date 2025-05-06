function Success() {
  return (
    <div className="my-16 w-full bg-[#A0DF6D] py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-10 md:flex-row md:px-0">
        <div className="mb-10 w-full md:mb-0 md:w-1/2">
          <h2 className="text-4xl font-extrabold uppercase leading-tight text-[#27221F] md:text-5xl">
            Gatito has achieved <br /> remarkable success
          </h2>
        </div>

        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-2 gap-4 p-4">
            <div className="rounded-lg bg-white p-10 text-center">
              <h3 className="text-3xl font-bold text-[#27221F]">5</h3>
              <p className="text-sm text-gray-700">Countries</p>
            </div>
            <div className="rounded-lg bg-white p-10 text-center">
              <h3 className="text-3xl font-bold text-[#27221F]">4.9</h3>
              <p className="text-sm text-gray-700">Average rating</p>
            </div>

            <div className="rounded-lg bg-white p-10 text-center">
              <h3 className="text-3xl font-bold text-[#27221F]">500+</h3>
              <p className="text-sm text-gray-700">Happy pet</p>
            </div>
            <div className="rounded-lg bg-white p-10 text-center">
              <h3 className="text-3xl font-bold text-[#27221F]">0</h3>
              <p className="text-sm text-gray-700">incidents or accidents</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
