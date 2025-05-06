import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Applayout() {
  return (
    <div className="bg-[#F9F4F1]">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Applayout;
