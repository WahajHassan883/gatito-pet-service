import Success from './Success';

function Values() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="mb-12 text-center text-5xl font-extrabold uppercase tracking-wider text-[#27221F]">
        Our Values
      </h1>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex items-start space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-400">
            <img src="/clock.png" alt="" className="h-9 w-9" />
          </div>
          <div>
            <h3 className="font-bold">TRUST</h3>
            <p>Mon - Fri: 9:00 AM to 6:00 PM</p>
            <p>Saturday: 9:00 AM to 2:00 PM</p>
            <p>Sunday: 9:00 AM to 2:00 PM</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#A0DF6D]">
            <img src="/clock.png" alt="" className="h-9 w-9" />
          </div>
          <div>
            <h3 className="font-bold">OPEN HOURS</h3>
            <p>Mon – Fri: 9:00 AM to 6:00 PM</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FEBF03]">
            <img src="/clock.png" alt="" className="h-9 w-9" />
          </div>
          <div>
            <h3 className="font-bold">OPEN HSAOURS</h3>
            <p>Mon - Fri: 9:00 AM to 6:00 PM</p>
            <p>Saturday: 9:00 AM to 2:00 PM</p>
            <p>Sunday: 9:00 AM to 2:00 PM</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FB7E46]">
            <img src="/clock.png" alt="" className="h-9 w-9" />
          </div>
          <div>
            <h3 className="font-bold">OPEN HOURS</h3>
            <p>Mon - Fri: 9:00 AM to 6:00 PM</p>
            <p>Saturday: 9:00 AM to 2:00 PM</p>
            <p>Sunday: 9:00 AM to 2:00 PM</p>
          </div>
        </div>
      </div>
      <Success />
    </div>
  );
}

export default Values;
