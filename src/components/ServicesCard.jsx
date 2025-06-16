import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const services = [
  {
    title: 'Dog Walking',
    description:
      'Our experienced dog walkers provide tailored walks for your furry friend, ensuring they get the exercise and stimulation they need.',
    imageSrc: './dog_walking.png',
  },
  {
    title: 'Pet Grooming',
    description:
      'Our experienced dog walkers provide tailored walks for your furry friend, ensuring they get the exercise and stimulation they need.',
    imageSrc: './pet_grooming.png',
  },
];

function ServiceCard({ showHeading = false, showExtras = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = services.length;

  const handlePrevoius = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < totalCards - 1) setCurrentIndex(currentIndex + 1);
  };

  const { title, description, imageSrc } = services[currentIndex];

  return (
    <div className="rounded-md px-4 py-5 md:px-16">
      {showHeading && (
        <h1 className="mb-8 mt-4 text-center text-3xl font-extrabold uppercase tracking-wider text-[#27221F] sm:text-4xl md:text-5xl">
          Our Services
        </h1>
      )}
      <div className="flex flex-col items-center gap-6 rounded-lg bg-white p-4 sm:p-6 md:flex-row md:gap-0">
        {/* Image */}
        <div className="w-full sm:w-auto">
          <img
            src={imageSrc}
            alt={title}
            className="mx-auto h-52 w-full max-w-sm rounded-md object-cover sm:h-64 md:h-80 md:w-[22vw]"
          />
        </div>

        {/* Text */}
        <div className="mt-4 flex flex-col justify-between text-center sm:text-left md:ml-12">
          <h2 className="text-2xl font-bold uppercase text-[#27221F] sm:text-3xl">
            {title}
          </h2>
          <p className="my-4 text-sm text-gray-700 sm:text-base md:my-5 md:max-w-md">
            {description}
          </p>
          <NavLink to="/book">
            <button className="mx-auto mt-6 w-fit rounded bg-[#FB7E46] px-5 py-2 text-sm font-bold uppercase text-black hover:bg-orange-600 sm:mx-0 md:mt-14">
              Book Now
            </button>
          </NavLink>
        </div>
      </div>

      {showExtras && (
        <div className="mx-auto mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between sm:px-4 md:mt-5 md:max-w-7xl md:flex-row md:px-0">
          <div className="rounded-md bg-white px-4 py-2 text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[#27221F]">
              See All Services
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handlePrevoius}
              disabled={currentIndex === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white hover:bg-gray-200 disabled:opacity-50"
            >
              <span className="text-3xl font-extrabold text-[#27221F]">
                &larr;
              </span>
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === totalCards - 1}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white hover:bg-gray-200 disabled:opacity-50"
            >
              <span className="text-3xl font-extrabold text-[#27221F]">
                &rarr;
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServiceCard;
