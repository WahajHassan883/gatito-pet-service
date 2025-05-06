import BlogPostCard from '../ui/BlogPostCard';

function BlogCard({ showHeading = true, showExtra = false }) {
  const blogPosts = [
    {
      imageSrc: './cat_dog.png',
      altText: 'Cat and Dog',
      title: 'STARTING YOUR NEW FRIENDSHIP OFF ON THE RIGHT PAW',
      link: '/blog1',
      tag: 'ADOPTING A PET',
      date: '9.11.2024',
    },
    {
      imageSrc: './golden_retriever.png',
      altText: 'Golden Retriever',
      title: 'STARTING YOUR NEW FRIENDSHIP OFF ON THE RIGHT PAW',
      link: '/blog2',
      tag: 'ADOPTING A PET',
      date: '9.11.2024',
    },
    {
      imageSrc: './spaniel.png',
      altText: 'Spaniel',
      title: 'STARTING YOUR NEW FRIENDSHIP OFF ON THE RIGHT PAW',
      link: '/blog3',
      tag: 'ADOPTING A PET',
      date: '9.11.2024',
    },
  ];

  return (
    <div className="mx-auto mb-10 max-w-6xl px-4 py-8">
      {showHeading && (
        <h1 className="pb-10 text-center text-4xl font-bold uppercase text-[#27221F]">
          Latest Blog Posts
        </h1>
      )}

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {blogPosts.map((post, id) => (
          <BlogPostCard key={id} {...post} />
        ))}
      </div>

      {showExtra && (
        <div className="mt-10 flex justify-start">
          <h2 className="bg-white px-2 py-2 text-base font-semibold uppercase text-[#27221F]">
            Browse All Articles
          </h2>
        </div>
      )}
    </div>
  );
}

export default BlogCard;
