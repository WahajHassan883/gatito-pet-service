import BlogPostCard from './BlogPostCard';
import { useQuery } from '@tanstack/react-query';
import { getBlogs } from './apiBlogs';

function BlogCard({ showHeading = true, showExtra = true }) {
  const { isLoading, data: blogs } = useQuery({
    queryKey: ['blog'],
    queryFn: getBlogs,
  });

  if (isLoading) return null;

  return (
    <div className="mx-auto mb-10 max-w-6xl px-4 py-8">
      {showHeading && (
        <h1 className="pb-10 text-center text-4xl font-bold uppercase text-[#27221F]">
          Latest Blog Posts
        </h1>
      )}

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {blogs.map((blog) => (
          <BlogPostCard blog={blog} key={blog.id} />
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
