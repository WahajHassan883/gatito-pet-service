import Logout from '../features/authentication/Logout';

function NavBarMenu() {
  return (
    <ul className="flex items-center gap-4 md:mr-6 md:mt-5">
      <li>
        <Logout />
      </li>
    </ul>
  );
}

export default NavBarMenu;
