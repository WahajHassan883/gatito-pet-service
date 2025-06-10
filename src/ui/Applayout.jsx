import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Applayout() {
  const location = useLocation();

  // Check if the current route is /login || /signup
  const isAuthPage =
    location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="flex min-h-screen flex-col bg-[#F9F4F1]">
      {!isAuthPage && <NavBar />}

      <div className="flex-grow">
        <Outlet />
      </div>

      {!isAuthPage && <Footer />}
    </div>
  );
}

export default Applayout;
