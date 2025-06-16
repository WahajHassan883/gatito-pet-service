function HowItWorks() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2">
        {/* Left Text Block */}
        <div className="flex flex-col justify-center px-2 md:px-4">
          <h2 className="mb-4 text-3xl font-extrabold text-[#27221F] sm:text-4xl lg:text-5xl">
            How It Works?
          </h2>
          <p className="text-base text-[#27221F] sm:text-lg md:text-xl lg:max-w-[506px]">
            At Gatito, we make it easy for you to provide the best care for your
            furry friends. Our process is simple and tailored to meet your
            unique needs.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-8">
          {[
            {
              step: 'Step 01',
              title: 'Fill Out the Form',
              color: 'blue-400',
              titleColor: 'text-gray-900',
              img: '/form_fill_out.png',
              description: 'Provide your information and your pet care needs.',
            },
            {
              step: 'Step 02',
              title: 'Get Matched',
              color: 'yellow-400',
              titleColor: 'text-[#27221F]',
              img: '/get_match.png',
              description:
                "Based on your profile, we'll connect you with nearby members.",
            },
            {
              step: 'Step 03',
              title: 'Receive Top-Tier Service',
              color: '[#A0DF6D]',
              titleColor: 'text-gray-900',
              img: '/receive_top-tier_service.png',
              description:
                'Prioritizing safety and satisfaction, we encourage members to build strong connections before entrusting their dog to another loving caregiver.',
            },
          ].map((step, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-md"
            >
              {/* Top Content */}
              <div className="p-5 sm:p-6 lg:h-auto">
                <p
                  className={`text-base font-semibold uppercase text-${step.color}`}
                >
                  {step.step}
                </p>
                <h3
                  className={`mt-1 text-2xl font-black uppercase sm:text-3xl md:text-4xl ${step.titleColor}`}
                >
                  {step.title}
                </h3>
                <p className="mt-2 text-base text-gray-600 sm:text-lg">
                  {step.description}
                </p>
              </div>

              {/* Image Container */}
              <div className={`bg-${step.color} p-4`}>
                <img
                  src={step.img}
                  alt={step.title}
                  className="mx-auto h-48 w-full max-w-full object-contain sm:h-60"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
