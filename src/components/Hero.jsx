import { NavLink, useLocation } from 'react-router-dom';

function Hero({ showButton = true, title1, title2, showImages = false }) {
  const location = useLocation();
  const isBlogPage = location.pathname === '/blog';

  return (
    <div className="relative mx-auto max-w-6xl overflow-hidden p-6">
      {showImages && (
        <>
          <div className="h-42 w-42 absolute left-0 top-10 overflow-hidden rounded-full border-8 border-[#FEBF03]">
            <img
              src="/woman_with_dog.png"
              alt="Woman with dog"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute bottom-10 left-4 h-40 w-40 overflow-hidden rounded-full border-8 border-[#8FB3F7]">
            <img
              src="/puppy.png"
              alt="Puppy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="h-42 w-42 absolute left-1/2 top-0 -translate-x-1/2 transform overflow-hidden rounded-full border-8 border-[#8FB3F7]">
            <img
              src="/dog_runing.png"
              alt="Dog Running"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute bottom-10 right-4 h-36 w-36 overflow-hidden rounded-full border-8 border-[#A0DF6D]">
            <img
              src="/cat.png"
              alt="Cat"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="h-42 w-42 absolute right-0 top-10 overflow-hidden rounded-full border-8 border-[#FEBF03]">
            <img
              src="/dog.png"
              alt="Golden retriever"
              className="h-full w-full object-cover"
            />
          </div>
        </>
      )}

      <div className="mt-44 text-center">
        <h1 className="text-5xl font-black uppercase text-[#27221F] md:text-8xl">
          <div>{title1}</div>
          <div>{title2}</div>
        </h1>

        <p className="mx-auto my-8 max-w-2xl px-4 text-2xl text-[#27221F]">
          we know your pets are cherished members of your family. That's why we
          provide loving, personalized pet sitting services tailored to their
          needs.
        </p>

        {showButton && (
          <NavLink to={isBlogPage ? '/blog/createblogform' : '/book'}>
            <button className="mx-auto block w-48 rounded bg-[#FB7E46] px-6 py-3 text-lg font-bold uppercase text-black hover:bg-orange-600">
              {isBlogPage ? 'Add New Blog' : 'Book Now'}
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Hero;
