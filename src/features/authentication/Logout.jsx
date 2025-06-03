import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import { useLogout } from './useLogout';

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <button
      disabled={isLoading}
      onClick={logout}
      className="flex items-center gap-2 rounded-md px-3 py-2 font-medium text-[#27221F] transition-colors hover:text-[#FB7E46]"
      title="Logout"
    >
      <HiArrowRightOnRectangle className="text-2xl" />
    </button>
  );
}

export default Logout;
