function HowItWorks() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        <div className="p-4">
          <h2 className="mb-4 text-5xl font-extrabold text-[#27221F]">
            How It Works?
          </h2>
          <p className="h-[286px] max-w-[506px] text-lg text-[#27221F]">
            At Gatito, we make it easy for you to provide the best care for your
            furry friends. Our process is simple and tailored to meet your
            unique needs.
          </p>
        </div>

        <div className="flex flex-col gap-6 p-4">
          <div className="h-[553px] w-[500px] overflow-hidden rounded-xl bg-white shadow-md">
            <div className="h-[286px] px-4 py-4">
              <p className="text-lg font-semibold uppercase text-blue-400">
                Step 01
              </p>
              <h3 className="text-5xl font-black uppercase text-gray-900">
                Fill Out the Form
              </h3>
              <p className="mt-2 text-lg text-gray-600">
                Provide your information and your pet care needs.
              </p>
            </div>
            <div className="h-[267px] bg-blue-400 p-4">
              <img
                src="/form_fill_out.png"
                alt="Form"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <div className="h-[553px] w-[500px] overflow-hidden rounded-xl bg-white shadow-md">
            <div className="h-[286px] px-4 py-4">
              <p className="text-lg font-semibold uppercase text-yellow-400">
                Step 02
              </p>
              <h3 className="text-5xl font-black uppercase text-[#27221F]">
                Get Matched
              </h3>
              <p className="mt-2 text-lg text-gray-600">
                Based on your profile, we'll connect you with nearby members.
              </p>
            </div>
            <div className="h-[267px] bg-yellow-400 p-4">
              <img
                src="/get_match.png"
                alt="Form"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <div className="h-[553px] w-[500px] overflow-hidden rounded-xl bg-white shadow-md">
            <div className="h-[286px] px-4 py-4">
              <p className="text-lg font-semibold uppercase text-[#A0DF6D]">
                Step 03
              </p>
              <h3 className="text-5xl font-black uppercase text-gray-900">
                receive TOP-TIER SERVICE
              </h3>
              <p className="mt-2 text-lg text-gray-600">
                Prioritizing safety and satisfaction, we encourage members to
                build strong connections before entrusting their dog to another
                loving caregiver.
              </p>
            </div>
            <div className="h-[267px] bg-[#A0DF6D] p-4">
              <img
                src="/receive_top-tier_service.png"
                alt="Form"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
