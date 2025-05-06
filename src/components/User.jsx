function User() {
  return (
    <form className="mx-auto mb-10 max-w-2xl p-6">
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-lg font-bold text-[#27221F]">
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div>
          <label className="mb-1 block text-lg font-bold text-[#27221F]">
            Email
          </label>
          <input
            type="email"
            placeholder="Example@youremail.com"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div>
          <label className="mb-1 block text-lg font-bold text-[#27221F]">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+777 666 8888"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div>
          <label className="mb-1 block text-lg font-bold text-[#27221F]">
            Service
          </label>
          <input
            type="text"
            placeholder="Ex Dog walking"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="mb-1 block text-lg font-bold text-[#27221F]">
          Message
        </label>
        <textarea
          rows="4"
          placeholder="Write your message here.."
          className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-[#FB7E46] px-6 py-3 text-center text-lg font-bold uppercase text-black transition duration-300 hover:bg-orange-600"
      >
        Book Now
      </button>
    </form>
  );
}

export default User;
