import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLogin } from './useLogin';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      },
    );
  }

  return (
    <form
      className="mx-auto mt-[100px] max-w-md space-y-6 rounded-lg bg-white p-6 shadow-md"
      onSubmit={handleSubmit}
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold uppercase text-[#FB7E46]">
          Login in Gatito
        </h1>
        <p className="text-md mt-1 font-semibold text-[#27221F]">
          Your trusted companion in pet services.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#27221F]">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#27221F]">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-md bg-[#FB7E46] px-4 py-2 font-semibold text-black transition-colors hover:bg-orange-600"
      >
        {isLoading ? 'Login...' : 'Login'}
      </button>

      <p className="text-center text-sm text-[#27221F]">
        Don't have an account?{' '}
        <NavLink
          to="/signup"
          className="font-semibold text-[#FB7E46] hover:underline"
        >
          Sign up{' '}
        </NavLink>
      </p>
    </form>
  );
}

export default LoginForm;
