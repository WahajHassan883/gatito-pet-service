import { NavLink } from 'react-router-dom';
import NavBarMenu from './NavBarMenu';

function NavBar() {
  return (
    <nav className="flex flex-col gap-4 px-4 py-4 sm:items-center sm:justify-between md:flex-row">
      {/* Main logo and nav links */}
      <div className="flex w-full flex-col items-center gap-4 rounded-xl bg-white p-4 sm:flex-row sm:justify-between md:ml-6 md:mt-5 md:w-[512px] md:items-center md:gap-6 md:rounded-full md:px-6 md:py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#FB7E46] sm:text-xl">
          <NavLink to="/">GATITO</NavLink>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-2 text-sm font-semibold uppercase text-[#27221F] sm:gap-4 md:flex-nowrap md:gap-6">
          <li>
            <NavLink to="/about" className="hover:text-[#FB7E46]">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="hover:text-[#FB7E46]">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-[#FB7E46]">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" className="hover:text-[#FB7E46]">
              Team
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="hover:text-[#FB7E46]">
              Blog
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Right section: menu + button */}
      <div className="flex flex-row items-center justify-center gap-2 sm:flex-row sm:gap-4 md:mt-0">
        <NavBarMenu />
        <NavLink to="/book">
          <button className="w-full rounded-md bg-[#FB7E46] px-5 py-2 text-sm font-bold uppercase text-black transition-colors hover:bg-orange-600 sm:mt-0 sm:w-auto">
            Book Now
          </button>
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
