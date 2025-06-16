function Success() {
  return (
    <section className="my-16 w-full bg-[#A0DF6D] px-4 py-16 sm:px-6 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 md:flex-row">
        {/* Left Section: Title */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-extrabold uppercase leading-tight text-[#27221F] sm:text-4xl md:text-5xl">
            Gatito has achieved <br className="hidden sm:block" /> remarkable
            success
          </h2>
        </div>

        {/* Right Section: Stats */}
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {[
              { number: '5', label: 'Countries' },
              { number: '4.9', label: 'Average rating' },
              { number: '500+', label: 'Happy pets' },
              { number: '0', label: 'Incidents or accidents' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white px-6 py-10 text-center shadow-sm"
              >
                <h3 className="text-3xl font-bold text-[#27221F]">
                  {item.number}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#27221F]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Success;
