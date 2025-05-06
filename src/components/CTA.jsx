import { NavLink } from 'react-router-dom';

function CTA() {
  return (
    <div className="h-[437px] w-[1312px] p-[32px]">
      <div className="flex flex-col justify-between overflow-hidden rounded-xl bg-[#27221F] md:flex-row">
        <div className="flex flex-col justify-center p-8 md:p-12">
          <h2 className="mb-4 text-4xl font-bold uppercase leading-tight text-white md:text-5xl">
            Schedule Your
            <br />
            Appointment Today
          </h2>
          <div>
            <NavLink to="/book">
              <button className="mr-6 mt-5 rounded-md bg-[#FB7E46] px-5 py-2 text-sm font-bold uppercase text-black hover:bg-orange-600">
                Book Now
              </button>
            </NavLink>
          </div>
        </div>

        <div className="h-[373px] w-[550px] px-5 py-5">
          <img
            src="/dog_2.png"
            alt="Happy dog"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default CTA;
