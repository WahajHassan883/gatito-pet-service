import { NavLink } from 'react-router-dom';
import NavBarMenu from './NavBarMenu';

function NavBar() {
  return (
    <nav className="flex flex-col items-center justify-between gap-4 px-4 py-4 md:flex-row">
      <div className="flex w-full flex-col items-center gap-4 rounded-full bg-white p-4 md:ml-6 md:mt-5 md:w-[512px] md:flex-row md:items-center md:gap-6 md:px-6 md:py-4">
        <div className="text-xl font-bold text-[#FB7E46]">
          <NavLink to="/">GATITO</NavLink>
        </div>

        <ul className="flex flex-wrap justify-center gap-4 text-sm font-semibold uppercase text-[#27221F] md:flex-nowrap md:gap-6">
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

      <div className="flex items-center gap-4">
        <NavBarMenu />
        <NavLink to="/book">
          <button className="mt-3 rounded-md bg-[#FB7E46] px-5 py-2 text-sm font-bold uppercase text-black transition-colors hover:bg-orange-600">
            Book Now
          </button>
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
