import { useState } from 'react';

const teams = [
  {
    title: 'Trainer',
    trainerName: 'Michael Johnson',
    description:
      'Michael uses positive reinforcement methods to teach your pets new tricks and good behavior.',
    imageSrc: './team.png',
  },
  {
    title: 'Trainer',
    trainerName: 'Barbara Woodhouse',
    description:
      'Barbara uses positive reinforcement methods to teach your pets new tricks and good behavior.',
    imageSrc: './team_2.jpg',
  },
];

function TeamCard({ showArrows = true }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = teams.length;

  const handlePrevoius = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < totalCards - 1) setCurrentIndex(currentIndex + 1);
  };

  const { title, trainerName, description, imageSrc } = teams[currentIndex];

  return (
    <div className="my-14 px-4 py-12 md:px-16">
      <h1 className="mb-12 text-center text-3xl font-extrabold uppercase tracking-wider text-[#27221F] md:text-5xl">
        Meet our Team
      </h1>

      <div className="flex flex-col items-center gap-8 rounded-lg bg-white p-4 md:flex-row md:p-8">
        <div className="w-full md:w-[40%]">
          <img
            src={imageSrc}
            alt="team"
            className="h-72 w-full rounded-md object-cover md:h-80"
          />
        </div>

        <div className="w-full text-left md:w-[60%]">
          <p className="mb-3 text-sm uppercase text-[#27221F]">{title}</p>
          <h2 className="text-2xl font-bold uppercase text-[#27221F] md:text-3xl">
            {trainerName}
          </h2>
          <p className="my-4 max-w-xl text-base text-[#27221F] md:text-lg">
            {description}
          </p>
          <div className="flex gap-4">
            <img src="/facebook.png" alt="facebook" className="h-6 w-6" />
            <img src="/insta.png" alt="instagram" className="h-6 w-6" />
            <img src="/tick_tock.png" alt="tick_tock" className="h-6 w-6" />
          </div>
        </div>
      </div>

      {showArrows && (
        <div className="mx-auto mt-6 flex max-w-6xl justify-center px-4 md:justify-end md:px-0">
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

export default TeamCard;
