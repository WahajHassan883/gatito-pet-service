import Success from './Success';

function Values() {
  const values = [
    {
      title: 'TRUST',
      color: 'bg-blue-400',
      icon: '/clock.png',
      hours: [
        'Mon - Fri: 9:00 AM to 6:00 PM',
        'Saturday: 9:00 AM to 2:00 PM',
        'Sunday: 9:00 AM to 2:00 PM',
      ],
    },
    {
      title: 'OPEN HOURS',
      color: 'bg-[#A0DF6D]',
      icon: '/clock.png',
      hours: ['Mon – Fri: 9:00 AM to 6:00 PM'],
    },
    {
      title: 'AVAILABILITY',
      color: 'bg-[#FEBF03]',
      icon: '/clock.png',
      hours: [
        'Mon - Fri: 9:00 AM to 6:00 PM',
        'Saturday: 9:00 AM to 2:00 PM',
        'Sunday: 9:00 AM to 2:00 PM',
      ],
    },
    {
      title: 'DEDICATION',
      color: 'bg-[#FB7E46]',
      icon: '/clock.png',
      hours: [
        'Mon - Fri: 9:00 AM to 6:00 PM',
        'Saturday: 9:00 AM to 2:00 PM',
        'Sunday: 9:00 AM to 2:00 PM',
      ],
    },
  ];

  return (
    <div className="px-4 py-16 md:px-6 lg:px-12">
      <h1 className="mb-12 text-center text-3xl font-extrabold uppercase tracking-wider text-[#27221F] sm:text-4xl lg:text-5xl">
        Our Values
      </h1>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
        {values.map((value, index) => (
          <div key={index} className="flex items-start gap-4">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full ${value.color}`}
            >
              <img src={value.icon} alt="" className="h-8 w-8 object-contain" />
            </div>
            <div>
              <h3 className="mb-1 text-lg font-bold text-[#27221F]">
                {value.title}
              </h3>
              <ul className="text-sm text-gray-700 sm:text-base">
                {value.hours.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <Success />
      </div>
    </div>
  );
}

export default Values;
