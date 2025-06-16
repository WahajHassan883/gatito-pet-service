import { Link } from 'react-router-dom';

function Information() {
  return (
    <div className="mx-4 my-10 flex flex-col gap-6 rounded-xl bg-white p-4 sm:mx-10 sm:p-6 md:mx-20 md:my-20 md:flex-row md:justify-between">
      {/* Open Hours */}
      <div className="flex items-start space-x-4">
        <img src="/open_hours.png" alt="Clock Icon" className="h-12 w-12" />
        <div>
          <h1 className="text-lg font-semibold">Open Hours</h1>
          <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 9:00 AM - 6:00 PM</p>
          <p>Sunday: 9:00 AM - 6:00 PM</p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-start space-x-4">
        <img src="/location.png" alt="Location Pin" className="h-12 w-12" />
        <div>
          <h1 className="text-lg font-semibold">Location</h1>
          <p>123 Maple Street, Springfield, Anytown, USA</p>
          <Link to="/map" className="text-[#FB7E46] hover:underline">
            See on Map
          </Link>
        </div>
      </div>

      {/* Contact */}
      <div className="flex items-start space-x-4">
        <img src="/contact.png" alt="Phone Icon" className="h-12 w-12" />
        <div>
          <h1 className="text-lg font-semibold">Contact</h1>
          <p>648-423-2785</p>
          <p>contact@gatito.com</p>
        </div>
      </div>
    </div>
  );
}

export default Information;
