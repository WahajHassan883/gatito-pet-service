import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaPaw } from 'react-icons/fa';
import NavBarMenu from './NavBarMenu';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col gap-4 px-4 py-4 sm:items-center sm:justify-between md:flex-row">
      {/* Logo + Hamburger (mobile), Full Nav (desktop) */}
      <div className="flex w-full items-center justify-between rounded-full bg-white md:ml-6 md:mt-2 md:w-[512px]">
        {/* Logo with Icon */}
        <div className="flex items-center gap-2 text-2xl font-bold text-[#FB7E46] sm:text-xl">
          <FaPaw className="text-[#FB7E46]" />
          <NavLink to="/">GATITO</NavLink>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className="text-2xl text-[#27221F] md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden w-full flex-row items-center gap-6 rounded-full bg-white px-6 py-4 md:flex">
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-semibold uppercase text-[#27221F]">
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
      </div>

      {/* Right section (desktop only) */}
      <div className="hidden flex-row items-center gap-4 md:flex">
        <NavBarMenu />
        <NavLink to="/book">
          <button className="rounded-md bg-[#FB7E46] px-5 py-2 text-sm font-bold uppercase text-black transition-colors hover:bg-orange-600">
            Book Now
          </button>
        </NavLink>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 shadow-lg md:hidden">
          <ul className="flex flex-col items-center gap-4 text-sm font-semibold uppercase text-[#27221F]">
            <li>
              <NavLink to="/about" onClick={() => setIsOpen(false)}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={() => setIsOpen(false)}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/team" onClick={() => setIsOpen(false)}>
                Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" onClick={() => setIsOpen(false)}>
                Blog
              </NavLink>
            </li>
          </ul>

          <NavBarMenu />

          <NavLink to="/book" onClick={() => setIsOpen(false)}>
            <button className="w-full rounded-md bg-[#FB7E46] px-5 py-2 text-sm font-bold uppercase text-black transition-colors hover:bg-orange-600">
              Book Now
            </button>
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
