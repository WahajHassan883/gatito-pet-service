import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { deleteBlog } from './apiBlogs';
import toast from 'react-hot-toast';
import { HiPencil, HiTrash } from 'react-icons/hi';
import { useState } from 'react';
import CreateBlogForm from './CreateBlogForm';

function BlogPostCard({ blog }) {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const { id: blogId, imageSrc, altText, title, tag, date } = blog;

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => {
      toast.success('Blog successfully deleted');
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <>
      <div className="overflow-hidden rounded-md bg-white shadow-md">
        <img
          src={imageSrc}
          alt={altText}
          className="h-48 w-full object-cover"
        />

        <div className="relative p-4">
          <button
            type="button"
            className="absolute right-6 top-0 p-2 text-[#27221F] transition-colors hover:text-blue-600 disabled:opacity-50"
            onClick={() => setShowForm((show) => !show)}
          >
            <HiPencil className="text-lg" />
          </button>
          {showForm && <CreateBlogForm blogToEdit={blog} />}
          <button
            type="button"
            className="absolute right-0 top-0 p-2 text-red-600 transition-colors hover:text-red-800 disabled:opacity-50"
            onClick={() => mutate(blogId)}
            disabled={isDeleting}
          >
            <HiTrash className="text-lg" />
          </button>

          <h2 className="mb-3 pr-8 text-lg font-bold uppercase text-[#27221F]">
            {title}
          </h2>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => navigate(`/blog/${blogId}`)}
              className="rounded-full border border-[#FB7E46] px-3 py-1 text-xs uppercase transition-all duration-300 hover:bg-[#FB7E46] hover:text-white"
            >
              {tag}
            </button>

            <span className="text-xs font-semibold text-[#27221F]">{date}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPostCard;
