import { useBlog } from '../features/blog/useBlog';
import UserAvatar from '../features/authentication/UserAvatar';

function BlogDetails() {
  const { blog, isLoading, error } = useBlog();

  if (isLoading) return <p className="py-10 text-center">Loading blog...</p>;
  if (error || !blog)
    return <p className="py-10 text-center text-red-500">Blog not found.</p>;

  const { imageSrc, altText, tag, date, title, author_name, author_avatar } =
    blog;

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
        <UserAvatar fullName={author_name} avatar={author_avatar} />
      </div>
    </div>
  );
}

export default BlogDetails;
