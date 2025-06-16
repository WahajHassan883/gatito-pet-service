import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="w-full bg-[#27221F] text-white">
      {/* Top section */}
      <div className="mx-auto flex max-w-screen-xl flex-wrap justify-between px-6 py-12 md:flex-nowrap">
        {/* Brand Section */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h2 className="mb-4 text-3xl font-extrabold">GATITO</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            At Gatito, we cherish the values <br />
            of compassion, dedication, and <br />
            personalized care.
          </p>
        </div>

        {/* Menu & Contact */}
        <div className="ml-5 flex flex-col gap-10 md:w-2/3 md:flex-row md:justify-end">
          {/* Menu */}
          <div>
            <h3 className="mb-4 text-lg font-bold">MENU</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {['about', 'services', 'contact', 'team', 'blog'].map((link) => (
                <li key={link}>
                  <NavLink
                    to={`/${link}`}
                    className="uppercase hover:underline"
                  >
                    {link}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold">CONTACT INFO</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>648-423-2785</li>
              <li className="uppercase">contact@gatito.com</li>
              <li>
                9400 S Normandie Ave <br />
                #14 Los Angeles, CA
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 px-6 py-6">
        <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
          <div className="text-center text-gray-400">
            &copy; 2025 GATITO. All rights reserved |
            <NavLink to="/privacy" className="px-2 hover:underline">
              Privacy Policy
            </NavLink>
            |
            <NavLink to="/terms" className="px-2 hover:underline">
              Terms & Conditions
            </NavLink>
          </div>

          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src="/facebookTwo.png" alt="Facebook" className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src="/instaTwo.png" alt="Instagram" className="h-5 w-5" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <img src="/tick_tocktwo.png" alt="TikTok" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
