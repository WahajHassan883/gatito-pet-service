import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="w-full rounded-t-3xl bg-[#27221F] text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap px-6 py-10">
        <div className="mb-6 w-full md:mb-0 md:w-1/3">
          <h2 className="mb-4 text-3xl font-extrabold">GATITO</h2>
          <p className="text-sm text-gray-200">
            At Gatito, we cherish the values <br />
            of compassion, dedication, and <br />
            personalized care.
          </p>
        </div>

        <div className="flex w-full flex-col justify-end gap-12 md:w-2/3 md:flex-row">
          <div>
            <h3 className="mb-4 text-lg font-bold">MENU</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <NavLink to="/about" className="hover:underline">
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="hover:underline">
                  SERVICES
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:underline">
                  CONTACT
                </NavLink>
              </li>
              <li>
                <NavLink to="/team" className="hover:underline">
                  TEAM
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="hover:underline">
                  BLOG
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">CONTACT INFO</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>648-423-2785.</li>
              <li className="uppercase">contact@gatito.com</li>
              <li>
                9400 S Normandie Ave <br />
                #14 Los Angeles, CA
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between px-6 py-4 text-sm text-white md:flex-row">
        <div className="mb-2 md:mb-0">
          &copy; 2025 GATITO. All rights reserved |
          <NavLink to="/privacy" className="px-2 hover:underline">
            Privacy Policy
          </NavLink>
          |
          <NavLink to="/terms" className="px-2 hover:underline">
            Terms & Conditions
          </NavLink>
        </div>

        <div className="flex space-x-6 text-white">
          <div>
            <img src="/facebookTwo.png" alt="facebook" />
          </div>

          <div>
            <img src="/instaTwo.png" alt="instagram" />
          </div>

          <div>
            <img src="/tick_tocktwo.png" alt="tick_tock" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
