import { Link } from 'react-router-dom';

function Information() {
  return (
    <div className="mx-20 my-20 flex justify-between rounded-xl bg-white">
      <div className="flex items-start space-x-4 p-3">
        <img src="/open_hours.png" alt="Clock Icon" className="h-12 w-12" />

        <div>
          <h1 className="text-lg font-semibold">Open Hours</h1>
          <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 9:00 AM - 6:00 PM</p>
          <p>Sunday: 9:00 AM - 6:00 PM</p>
        </div>
      </div>

      <div className="flex items-start space-x-4 p-4">
        <img src="/location.png" alt="Location Pin" className="h-12 w-12" />
        <div>
          <h1 className="text-lg font-semibold">Location</h1>
          <p>123 Maple Street, Springfield, Anytown, USA</p>
          <Link to="/map" className="text-[#FB7E46] hover:underline">
            See on Map
          </Link>
        </div>
      </div>

      <div className="flex items-start space-x-4 p-4">
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
