import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createContactus } from '../services/apiContactus';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

function User() {
  const { register, handleSubmit, formState, reset } = useForm();

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: createContactus,
    onSuccess: () => {
      toast.success('New Booking successfully created');
      queryClient.invalidateQueries({ queryKey: ['contactus'] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const { errors } = formState;

  function onSubmit(data) {
    mutate(data);
  }

  return (
    <form
      className="mx-auto mb-10 max-w-2xl p-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-lg font-bold text-[#27221F]">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            {...register('name', { required: 'Name is required' })}
            disabled={isLoading}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="mb-1 block text-lg font-bold text-[#27221F]">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Example@youremail.com"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
            disabled={isLoading}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="mb-1 block text-lg font-bold text-[#27221F]">
            Phone Number
          </label>
          <input
            id="phoneNo"
            type="tel"
            placeholder="+777 666 8888"
            {...register('phoneNo', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Invalid phone number',
              },
            })}
            disabled={isLoading}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {errors.phoneNo && (
            <p className="mt-1 text-sm text-red-600">
              {errors.phoneNo.message}
            </p>
          )}
        </div>
        <div>
          <label className="mb-1 block text-lg font-bold text-[#27221F]">
            Service
          </label>
          <input
            id="service"
            type="text"
            placeholder="Ex Dog walking"
            {...register('service', { required: 'Service is required' })}
            disabled={isLoading}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {errors.service && (
            <p className="mt-1 text-sm text-red-600">
              {errors.service.message}
            </p>
          )}
        </div>
      </div>

      <div className="mb-6">
        <label className="mb-1 block text-lg font-bold text-[#27221F]">
          Message
        </label>
        <textarea
          id="message"
          rows="4"
          placeholder="Write your message here.."
          {...register('message')}
          disabled={isLoading}
          className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-md bg-[#FB7E46] px-6 py-3 text-center text-lg font-bold uppercase text-black transition duration-300 hover:bg-orange-600"
      >
        {isLoading ? 'Booking...' : 'Book Now'}
      </button>
    </form>
  );
}

export default User;
