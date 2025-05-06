const galleryPost = [
  [
    {
      type: 'text',
      heading: 'FOLLOW US ON',
      subheading: 'INSTAGRAM',
      width: 'w-[30%]',
    },
    {
      imageSrc: './cat_3.jpg',
      alt: 'Cat',
      width: 'w-[30%]',
    },
    {
      imageSrc: './dog_with_girls.png',
      alt: 'Dog with girls',
      width: 'w-[40%]',
    },
  ],
  [
    {
      imageSrc: './dog_with_family.png',
      alt: 'Dog with family',
      width: 'w-[40%]',
    },
    {
      imageSrc: './puppy_with_girl.png',
      alt: 'Puppy with girl',
      width: 'w-[30%]',
    },
    {
      imageSrc: './team.png',
      alt: 'Team',
      width: 'w-[30%]',
    },
  ],
];

function Gallery() {
  return (
    <div className="mb-10 mt-10 px-4 py-12">
      <div className="mx-20 max-w-6xl space-y-6">
        {galleryPost.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-4">
            {row.map((item, index) =>
              item.type === 'text' ? (
                <div
                  key={index}
                  className={`flex h-[343px] ${item.width} items-center justify-center rounded-lg bg-white p-6`}
                >
                  <h2 className="text-center text-5xl font-extrabold uppercase leading-tight text-[#27221F]">
                    {item.heading}
                    <br />
                    <span className="text-[#FB7E46]">{item.subheading}</span>
                  </h2>
                </div>
              ) : (
                <div
                  key={index}
                  className={`h-[343px] ${item.width} overflow-hidden rounded-lg shadow-md`}
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
