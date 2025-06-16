import { NavLink } from 'react-router-dom';

function CTA() {
  return (
    <div className="px-4 py-10 md:px-8">
      <div className="flex flex-col overflow-hidden rounded-xl bg-[#27221F] md:flex-row md:items-center">
        {/* Text Section */}
        <div className="flex flex-1 flex-col justify-center p-6 md:p-12">
          <h2 className="mb-4 text-3xl font-bold uppercase leading-tight text-white md:text-5xl">
            Schedule Your
            <br />
            Appointment Today
          </h2>
          <NavLink to="/book">
            <button className="mt-5 rounded-md bg-[#FB7E46] px-6 py-3 text-sm font-bold uppercase text-black hover:bg-orange-600">
              Book Now
            </button>
          </NavLink>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src="/dog_2.png"
            alt="Happy dog"
            className="h-full w-full object-cover md:rounded-r-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default CTA;
