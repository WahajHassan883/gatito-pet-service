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
        <h1 className="mb-12 mt-8 text-center text-5xl font-extrabold uppercase tracking-wider text-[#27221F]">
          Our Services
        </h1>
      )}
      <div className="flex flex-col items-center rounded-lg bg-white md:flex-row">
        <div>
          <img
            src={imageSrc}
            alt={title}
            className="h-80 w-[22vw] rounded-md object-cover"
          />
        </div>

        <div className="ml-12 flex flex-col justify-between text-left">
          <h2 className="text-3xl font-bold uppercase text-[#27221F]">
            {title}
          </h2>
          <p className="my-5 max-w-md text-lg text-gray-700">{description}</p>
          <NavLink to="/book">
            <button className="mt-14 w-fit rounded bg-[#FB7E46] px-5 py-2 text-sm font-bold uppercase text-black hover:bg-orange-600">
              Book Now
            </button>
          </NavLink>
        </div>
      </div>

      {showExtras && (
        <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between px-4 md:px-0">
          <div className="rounded-md bg-white px-4 py-2">
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
