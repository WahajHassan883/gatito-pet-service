import { useParams } from 'react-router-dom';
import { useBlog } from '../features/blog/useBlog';
import UserAvatar from '../features/authentication/UserAvatar';

function BlogDetails() {
  const { blog, isLoading } = useBlog();
  const { blogId } = useParams();

  if (isLoading) return null;

  const blogPost = blog.find((item) => String(item.id) === String(blogId));

  const { imageSrc, altText, tag, date, title } = blogPost;

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 text-center">
      <div className="mb-6 aspect-[16/12] w-full overflow-hidden rounded-md">
        <img
          src={imageSrc}
          alt={altText}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mb-4 flex flex-wrap justify-center gap-4 text-sm">
        <span className="rounded-full border border-[#FB7E46] px-3 py-1 text-xs font-medium text-[#27221F]">
          {tag}
        </span>
        <span className="mt-1 text-sm font-medium text-[#27221F]">{date}</span>
      </div>
      <h1 className="mb-6 text-3xl font-extrabold uppercase text-[#27221F]">
        {title}
      </h1>
      <div className="mt-4 flex items-center justify-center gap-3">
        <div className="text-left">
          <UserAvatar />
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
