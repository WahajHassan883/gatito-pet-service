import coupleWithDog from '../assets/couple_with_dog.png'; // Adjust path as needed

function Herotwo() {
  return (
    <section className="my-12 px-6 md:px-12">
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row">
        {/* Text Content */}
        <div className="text-center md:w-1/2 md:text-left">
          <h1 className="mb-4 text-3xl font-extrabold uppercase leading-tight text-[#27221F]">
            Passionate about pets and driven <br className="hidden md:block" />
            by a shared love for animals
          </h1>
          <p className="text-lg text-gray-700">
            Gatito was founded by two married couples who envisioned a pet care
            service that goes beyond the ordinary. From the outset, our mission
            has been clear: to provide pets with the same level of love,
            attention, and care they receive from their own families. What
            started as a small endeavor fueled by enthusiasm quickly grew into
            something more significant. With a handful of loyal clients who
            entrusted us with the well-being of their furry companions, we
            embarked on a journey to make a positive impact in the lives of pets
            and their owners alike.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center md:w-1/2">
          <img
            src={coupleWithDog}
            alt="Couple with Dog"
            className="h-auto w-full max-w-md rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Herotwo;
