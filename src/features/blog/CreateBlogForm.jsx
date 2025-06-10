import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { createBlogs } from './apiBlogs';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function CreateBlogForm() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { register, handleSubmit, reset, formState } = useForm();

  const { mutate, isLoading } = useMutation({
    mutationFn: createBlogs,
    onSuccess: () => {
      toast.success('New Blog successfully created');
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      reset();
      navigate('/blog');
    },
    onError: (err) => toast.error(err.message),
  });

  const { errors } = formState;

  function onSubmit(data) {
    mutate({ ...data, imageSrc: data.imageSrc[0] });
  }

  return (
    <form
      className="mx-auto my-10 max-w-xl rounded-lg bg-white p-6 shadow"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="mb-6 text-2xl font-bold uppercase text-[#27221F]">
        Create New Blog
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-[#27221F]">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register('title', {
              required: 'Please provide a title for your blog post',
            })}
            placeholder="Enter blog title"
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#FB7E46] focus:outline-none"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#27221F]">
            Tag
          </label>
          <input
            type="text"
            id="tag"
            {...register('tag', {
              required: 'Please select a category for your post',
            })}
            placeholder="e.g. Adopting a Pet"
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#FB7E46] focus:outline-none"
          />
          {errors.tag && (
            <p className="mt-1 text-sm text-red-600">{errors.tag.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#27221F]">
            Alt Text
          </label>
          <input
            type="text"
            id="altText"
            {...register('altText', {
              required: 'Please describe the image for accessibility',
            })}
            placeholder="Describe the image"
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#FB7E46] focus:outline-none"
          />
          {errors.altText && (
            <p className="mt-1 text-sm text-red-600">
              {errors.altText.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#27221F]">
            Blog Link
          </label>
          <input
            type="text"
            id="link"
            {...register('link')}
            placeholder="/blog-slug"
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#FB7E46] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#27221F]">
            Date
          </label>
          <input
            type="date"
            id="date"
            {...register('date', {
              required: 'Please select a publication date',
            })}
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#FB7E46] focus:outline-none"
          />
          {errors.date && (
            <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#27221F]">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="imageSrc"
            {...register('imageSrc', {
              required: 'Please upload a featured image for your post',
            })}
            className="mt-1 px-3 py-2 text-sm file:mr-4 file:rounded-full file:border-0 file:bg-[#FB7E46] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[#e36b33]"
          />
          {errors.imageSrc && (
            <p className="mt-1 text-sm text-red-600">
              {errors.imageSrc.message}
            </p>
          )}
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full rounded bg-[#FB7E46] px-4 py-2 font-semibold text-white transition duration-300 hover:bg-[#e36b33]"
          >
            {isLoading ? 'Publishing...' : 'Publish Blog Post'}
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateBlogForm;
