function BlogDetails({ imagesrc }) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 text-center">
      <div className="mb-6 aspect-[16/12] w-full overflow-hidden rounded-md">
        <img
          src={imagesrc}
          alt="Dog at beach"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mb-4 flex flex-wrap justify-center gap-4 text-sm">
        <span className="rounded-full border border-[#FB7E46] px-3 py-1 text-xs font-medium text-[#27221F]">
          ADOPTING A PET
        </span>
        <span className="mt-1 text-sm font-medium text-[#27221F]">
          9.11.2024
        </span>
      </div>

      <h1 className="mb-6 text-3xl font-extrabold uppercase text-[#27221F]">
        Starting Your New Friendship Off on the Right Paw
      </h1>

      <div className="mt-4 flex items-center justify-center gap-3">
        <img
          src="./client.png"
          alt="Michael Johnson"
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="text-left">
          <h3 className="text-md font-bold text-[#27221F]">Michael Johnson</h3>
          <p className="text[#27221F] text-sm">Pet Owner, Happy Paws</p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
