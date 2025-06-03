import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Backdrop, CircularProgress } from '@mui/material';
import { useLoading } from '../ui/Loader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import LoginForm from '../features/authentication/loginForm';
import SignUpForm from '../features/authentication/SignUpForm';

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  const { loading, setLoading } = useLoading();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [location, setLoading]);
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <Backdrop
        sx={(theme) => ({
          color: '#fff',
          zIndex: theme.zIndex.drawer + 9999,
        })}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Applayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignUpForm />} />
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

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: '#F3F4F6',
            color: '#111827',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
