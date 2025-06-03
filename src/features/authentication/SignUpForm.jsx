import { NavLink } from 'react-router-dom';
import { useSignUp } from './useSignUp';
import { useForm } from 'react-hook-form';

function SignUpForm() {
  const { signup, isLoading } = useSignUp();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      },
    );
  }

  return (
    <form
      className="mx-auto mb-[50px] mt-[100px] max-w-md space-y-6 rounded-lg bg-white p-6 shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold uppercase text-[#FB7E46]">
          Sign up for Gatito
        </h1>
        <p className="text-md mt-1 font-semibold text-[#27221F]">
          Your trusted companion in pet services.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#27221F]">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          placeholder="Your Full Name"
          disabled={isLoading}
          {...register('fullName', {
            required: 'This field is required',
          })}
          className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-[#27221F]">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="you@example.com"
          disabled={isLoading}
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please provide a valid email address',
            },
          })}
          className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-[#27221F]">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="password"
          disabled={isLoading}
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Password needs a minimum of 8 characters',
            },
          })}
          className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-[#27221F]">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm password"
          disabled={isLoading}
          {...register('confirmPassword', {
            required: 'Please confirm your password',
            validate: (value) =>
              value === getValues('password') || 'Passwords do not match',
          })}
          className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none"
        />
        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-600">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-[#FB7E46] px-4 py-2 font-semibold text-black transition-colors hover:bg-orange-600"
        disabled={isLoading}
      >
        {isLoading ? 'Sign Up...' : 'Sign Up'}
      </button>

      <p className="text-center text-sm text-[#27221F]">
        Already have an account?{' '}
        <NavLink
          to="/login"
          className="font-semibold text-[#FB7E46] hover:underline"
        >
          Login{' '}
        </NavLink>
      </p>
    </form>
  );
}

export default SignUpForm;
