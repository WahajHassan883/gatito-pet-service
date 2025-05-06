import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Backdrop, CircularProgress } from '@mui/material';
import { useLoading } from '../ui/Loader';

const Applayout = lazy(() => import('../ui/Applayout'));
const Home = lazy(() => import('../pages/Home'));
const Services = lazy(() => import('../pages/Services'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const Blog = lazy(() => import('../pages/Blog'));
const ContactUs = lazy(() => import('../pages/ContactUs'));
const Team = lazy(() => import('../pages/Team'));
const Blog1 = lazy(() => import('../pages/Blog1'));
const Blog2 = lazy(() => import('../pages/Blog2'));
const Blog3 = lazy(() => import('../pages/Blog3'));

function App() {
  const { loading, setLoading } = useLoading();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [location, setLoading]);
  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 9999 })}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Applayout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="team" element={<Team />} />
            <Route path="blog1" element={<Blog1 />} />
            <Route path="blog2" element={<Blog2 />} />
            <Route path="blog3" element={<Blog3 />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
