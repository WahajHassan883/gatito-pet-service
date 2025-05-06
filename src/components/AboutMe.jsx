function AboutMe({ showHeading = false }) {
  return (
    <section className="mx-auto max-w-3xl py-10 text-[#27221F]">
      {showHeading && (
        <h1 className="mb-6 text-7xl font-extrabold">ABOUT ME</h1>
      )}

      <h2 className="mb-8 text-2xl font-bold">
        HOW TO CHOOSE WHEN TO ADOPT A NEW PET?
      </h2>
      <p className="text-sm text-[#27221F]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper nulla
        elementum, lobortis feugiat cras rhoncus, sem est molestie. Quam nisi,
        purus adipiscing dictumst fringilla. Lorem iaculis imperdiet nisi
        auctor. Sagittis quis curabitur morbi tincidunt.
      </p>
      <p className="text-md text-[#27221F]">
        Sed arcu, et ipsum elementum scelerisque nisi, odio. Bibendum fringilla
        interdum placerat elit consectetur arcu. Auctor nisi.
      </p>
      <ul className="text-md list-inside list-disc text-[#27221F]">
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
      <h3 className="text-md mt-5 font-bold">
        SHOULD I ADOPT A CAT, OR A DOG?
      </h3>
      <p className="text-sm text-[#27221F]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper nulla
        elementum, lobortis feugiat cras rhoncus, sem est molestie. Quam nisi,
        purus adipiscing dictumst fringilla.{' '}
        <span className="text-[#27221F] underline">Lorem iaculis</span>
        imperdiet nisi auctor. Sagittis quis curabitur morbi tincidunt.
      </p>
      <p className="text-sm text-[#27221F]">
        Sed arcu, et ipsum elementum scelerisque nisi, odio. Bibendum fringilla
        interdum placerat elit consectetur arcu. Auctor nisi.
      </p>
    </section>
  );
}

export default AboutMe;
