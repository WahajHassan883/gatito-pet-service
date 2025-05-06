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
    <div className="my-14 rounded-md px-4 py-12 md:px-16">
      <h1 className="mb-12 text-center text-5xl font-extrabold uppercase tracking-wider text-[#27221F]">
        Meet our Team
      </h1>

      <div className="flex flex-col items-center rounded-lg bg-white md:flex-row">
        <div>
          <img
            src={imageSrc}
            alt="team"
            className="h-80 w-[35vw] rounded-md object-cover"
          />
        </div>

        <div className="ml-12 flex flex-col justify-between text-left">
          <p className="mb-5 text-sm uppercase text-[#27221F]">{title}</p>
          <h2 className="text-3xl font-bold uppercase text-[#27221F]">
            {trainerName}
          </h2>
          <p className="my-5 max-w-md text-lg text-[#27221F]">{description}</p>
          <div className="flex gap-5">
            <div>
              <img src="/facebook.png" alt="facebook" />
            </div>

            <div>
              <img src="/insta.png" alt="instagram" />
            </div>

            <div>
              <img src="/tick_tock.png" alt="tick_tock" />
            </div>
          </div>
        </div>
      </div>

      {showArrows && (
        <div className="flex- mx-auto mt-5 flex max-w-6xl items-center justify-end px-4 md:px-0">
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
