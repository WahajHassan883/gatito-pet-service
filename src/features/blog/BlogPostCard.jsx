import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { deleteBlog } from './apiBlogs';
import toast from 'react-hot-toast';
import { HiPencil, HiTrash } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import CreateBlogForm from './CreateBlogForm';
import supabase from '../../services/supabase';

function BlogPostCard({ blog }) {
  const [showForm, setShowForm] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);
  const navigate = useNavigate();

  const {
    id: blogId,
    imageSrc,
    altText,
    title,
    tag,
    date,
    authorid,
    price,
  } = blog;

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => {
      toast.success('Blog successfully deleted');
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
    onError: (err) => toast.error(err.message),
  });

  useEffect(() => {
    async function getCurrentUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) setCurrentUserId(user.id);
    }
    getCurrentUser();
  }, []);

  const isAuthor = currentUserId === authorid;

  return (
    <div className="overflow-hidden rounded-md bg-white shadow-md">
      <img src={imageSrc} alt={altText} className="h-48 w-full object-cover" />

      <div className="relative p-4">
        {/* Author Controls */}
        {isAuthor && (
          <>
            <button
              type="button"
              className="absolute right-6 top-0 p-2 text-[#27221F] hover:text-blue-600"
              onClick={() => setShowForm((show) => !show)}
            >
              <HiPencil className="text-lg" />
            </button>
            {showForm && <CreateBlogForm blogToEdit={blog} />}

            <div className="absolute right-0 top-0 flex flex-col items-center p-2">
              <button
                type="button"
                className="text-red-600 hover:text-red-800"
                onClick={() => mutate(blogId)}
                disabled={isDeleting}
              >
                <HiTrash className="text-lg" />
              </button>
            </div>
          </>
        )}

        {!isAuthor && (
          <div className="absolute right-0 top-0 flex flex-col items-center p-2">
            <span className="mt-1 text-sm font-semibold text-[#27221F]">
              {price} $
            </span>
          </div>
        )}

        <h2 className="mb-3 pr-8 text-lg font-bold uppercase text-[#27221F]">
          {title}
        </h2>

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(`/blog/${blogId}`)}
            className="rounded-full border border-[#FB7E46] px-3 py-1 text-xs uppercase hover:bg-[#FB7E46] hover:text-white"
          >
            {tag}
          </button>
          <span className="text-xs font-semibold text-[#27221F]">{date}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogPostCard;
