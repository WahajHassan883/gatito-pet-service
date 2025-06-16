function AboutMe({ showHeading = false }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10 text-[#27221F]">
      {showHeading && (
        <h1 className="mb-6 text-center text-4xl font-extrabold sm:text-left sm:text-5xl md:text-6xl lg:text-7xl">
          ABOUT ME
        </h1>
      )}

      <h2 className="mb-4 text-center text-xl font-bold sm:text-left sm:text-2xl">
        HOW TO CHOOSE WHEN TO ADOPT A NEW PET?
      </h2>
      <p className="mb-3 text-sm leading-relaxed sm:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper nulla
        elementum, lobortis feugiat cras rhoncus, sem est molestie. Quam nisi,
        purus adipiscing dictumst fringilla. Lorem iaculis imperdiet nisi
        auctor. Sagittis quis curabitur morbi tincidunt.
      </p>
      <p className="mb-6 text-sm leading-relaxed sm:text-base">
        Sed arcu, et ipsum elementum scelerisque nisi, odio. Bibendum fringilla
        interdum placerat elit consectetur arcu. Auctor nisi.
      </p>

      <ul className="mb-6 list-inside list-disc text-sm leading-relaxed sm:text-base">
        <li>
          Pretium nibh ipsum consequat nisl vel pretium. Sed vulputate mi sit
        </li>
        <li>
          Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam
          id diam maer dolore eu fugiat nulla pariatur
        </li>
        <li>
          Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac
        </li>
        <li>
          Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum
        </li>
      </ul>

      <h3 className="mb-2 mt-5 text-center text-base font-bold sm:text-left sm:text-lg">
        SHOULD I ADOPT A CAT, OR A DOG?
      </h3>
      <p className="mb-3 text-sm leading-relaxed sm:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper nulla
        elementum, lobortis feugiat cras rhoncus, sem est molestie. Quam nisi,
        purus adipiscing dictumst fringilla.{' '}
        <span className="underline">Lorem iaculis</span> imperdiet nisi auctor.
        Sagittis quis curabitur morbi tincidunt.
      </p>
      <p className="text-sm leading-relaxed sm:text-base">
        Sed arcu, et ipsum elementum scelerisque nisi, odio. Bibendum fringilla
        interdum placerat elit consectetur arcu. Auctor nisi.
      </p>
    </section>
  );
}

export default AboutMe;
