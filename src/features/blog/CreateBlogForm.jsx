import toast from 'react-hot-toast';
import { createEditBlogs } from './apiBlogs';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function CreateBlogForm({ blogToEdit = {} }) {
  const { id: editId, ...editValues } = blogToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm();

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (isEditSession) {
      reset(editValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditSession, JSON.stringify(editValues), reset, editValues]);

  const { mutate: createBlog, isLoading: isCreating } = useMutation({
    mutationFn: createEditBlogs,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog'] });
      reset();
      toast.success('New Blog successfully created');
      navigate('/blog');
    },
    onError: (err) => toast.error(err.message),
  });

  const { mutate: editBlog, isLoading: isEditing } = useMutation({
    mutationFn: ({ newBlogData, id }) => createEditBlogs(newBlogData, id),
    onSuccess: () => {
      toast.success('Blog successfully edited');
      queryClient.invalidateQueries({ queryKey: ['blog'] });
      reset();
      navigate('/blog');
    },
    onError: (err) => toast.error(err.message),
  });

  const { errors } = formState;
  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const image =
      typeof data.imageSrc === 'string' ? data.imageSrc : data.imageSrc[0];

    const newBlog = {
      ...data,
      imageSrc: image,
      price: parseFloat(data.price),
    };

    if (isEditSession) {
      editBlog({ newBlogData: newBlog, id: editId });
    } else {
      createBlog(newBlog);
    }
  }

  return (
    <form
      className="mx-auto my-10 max-w-xl rounded-lg bg-white p-6 shadow"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="mb-6 text-center text-2xl font-bold uppercase text-[#27221F]">
        {isEditSession ? 'Edit Blog' : 'Create New Blog'}
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-[#27221F]">
            Title
          </label>
          <input
            type="text"
            {...register('title', {
              required: 'Please provide a title for your blog post',
            })}
            placeholder="Enter blog title"
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#FB7E46] focus:outline-none"
            disabled={isWorking}
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
            {...register('tag', {
              required: 'Please select a category for your post',
            })}
            placeholder="e.g. Adopting a Pet"
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#FB7E46] focus:outline-none"
            disabled={isWorking}
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
            {...register('altText', {
              required: 'Please describe the image for accessibility',
            })}
            placeholder="Describe the image"
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#FB7E46] focus:outline-none"
            disabled={isWorking}
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
            {...register('link')}
            placeholder="/blog-slug"
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#FB7E46] focus:outline-none"
            disabled={isWorking}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#27221F]">
            Price
          </label>
          <input
            type="text"
            {...register('price', {
              required: 'Please enter a price',
              validate: (value) =>
                !isNaN(parseFloat(value)) && parseFloat(value) >= 0
                  ? true
                  : 'Price must be a non-negative number',
            })}
            placeholder="price"
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#FB7E46] focus:outline-none"
            disabled={isWorking}
          />
          {errors.price && (
            <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#27221F]">
            Date
          </label>
          <input
            type="date"
            {...register('date', {
              required: 'Please select a publication date',
            })}
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#FB7E46] focus:outline-none"
            disabled={isWorking}
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
            {...register('imageSrc', {
              required: isEditSession
                ? false
                : 'Please upload a featured image for your post',
            })}
            className="mt-1 px-3 py-2 text-sm file:mr-4 file:rounded-full file:border-0 file:bg-[#FB7E46] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[#e36b33]"
            disabled={isWorking}
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
            className="w-full rounded bg-[#FB7E46] px-4 py-2 font-semibold uppercase text-white transition duration-300 hover:bg-[#e36b33]"
            disabled={isWorking}
          >
            {isWorking
              ? isEditSession
                ? 'Updating...'
                : 'Publishing...'
              : isEditSession
                ? 'Update Blog Post'
                : 'Publish Blog Post'}
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateBlogForm;
