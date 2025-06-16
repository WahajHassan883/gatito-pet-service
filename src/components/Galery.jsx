const galleryPost = [
  [
    {
      type: 'text',
      heading: 'FOLLOW US ON',
      subheading: 'INSTAGRAM',
      width: 'sm:w-[30%]',
    },
    {
      imageSrc: './cat_3.jpg',
      alt: 'Cat',
      width: 'sm:w-[30%]',
    },
    {
      imageSrc: './dog_with_girls.png',
      alt: 'Dog with girls',
      width: 'sm:w-[40%]',
    },
  ],
  [
    {
      imageSrc: './dog_with_family.png',
      alt: 'Dog with family',
      width: 'sm:w-[40%]',
    },
    {
      imageSrc: './puppy_with_girl.png',
      alt: 'Puppy with girl',
      width: 'sm:w-[30%]',
    },
    {
      imageSrc: './team.png',
      alt: 'Team',
      width: 'sm:w-[30%]',
    },
  ],
];

function Gallery() {
  return (
    <div className="mb-10 mt-10 px-4 py-12">
      <div className="mx-auto max-w-6xl space-y-6">
        {galleryPost.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            {row.map((item, index) =>
              item.type === 'text' ? (
                <div
                  key={index}
                  className={`flex h-[280px] w-full ${item.width} items-center justify-center rounded-lg bg-white p-6`}
                >
                  <h2 className="text-center text-3xl font-extrabold uppercase leading-tight text-[#27221F] sm:text-5xl">
                    {item.heading}
                    <br />
                    <span className="text-[#FB7E46]">{item.subheading}</span>
                  </h2>
                </div>
              ) : (
                <div
                  key={index}
                  className={`h-[280px] w-full ${item.width} overflow-hidden rounded-lg shadow-md`}
                >
                  <img
                    src={item.imageSrc}
                    alt={item.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ),
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
