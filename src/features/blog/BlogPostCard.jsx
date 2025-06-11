import { useMutation, useQueryClient } from '@tanstack/react-query';
import { NavLink } from 'react-router-dom';
import { deleteBlog } from './apiBlogs';
import toast from 'react-hot-toast';

function BlogPostCard({ blog }) {
  const { id: blogId, imageSrc, altText, title, link, tag, date } = blog;

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => {
      toast.success('Blog successfully deleted');
      queryClient.invalidateQueries({ queryKey: ['blog'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <div className="bg-white shadow-md">
      <img src={imageSrc} alt={altText} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h2 className="mb-3 text-lg font-bold uppercase text-[#27221F]">
          {title}
        </h2>
        <div className="flex items-center justify-between">
          <NavLink to={link}>
            <button className="rounded-full border border-[#FB7E46] px-3 py-1 text-xs uppercase transition-all duration-300 hover:bg-[#FB7E46] hover:text-white">
              {tag}
            </button>
          </NavLink>
          <button
            type="button"
            className="rounded-full border border-[#FB7E46] px-3 py-1 text-xs uppercase transition-all duration-300 hover:bg-[#FB7E46] hover:text-white"
            onClick={() => mutate(blogId)}
            disabled={isDeleting}
          >
            delete
          </button>
          <span className="text-xs font-semibold text-[#27221F]">{date}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogPostCard;
