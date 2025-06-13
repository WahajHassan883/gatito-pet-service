import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Backdrop, CircularProgress } from '@mui/material';
import { useLoading } from '../ui/Loader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import LoginForm from '../features/authentication/LoginForm';
import SignUpForm from '../features/authentication/SignUpForm';
import ProtectedRoute from '../ui/ProtectedRoute';
import CreateBlogForm from '../features/blog/CreateBlogForm';
import Blog1 from '../pages/Blog1';
import PaymentSuccess from '../pages/PaymentSuccess';

const Applayout = lazy(() => import('../ui/Applayout'));
const Home = lazy(() => import('../pages/Home'));
const Services = lazy(() => import('../pages/Services'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const Blog = lazy(() => import('../pages/Blog'));
const ContactUs = lazy(() => import('../pages/ContactUs'));
const Team = lazy(() => import('../pages/Team'));
const StripeCheckoutPage = lazy(() => import('../pages/StripeCheckoutPage'));

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

      <Suspense
        fallback={
          <Backdrop open sx={{ color: '#fff', zIndex: 9999 }}>
            <CircularProgress color="inherit" />
          </Backdrop>
        }
      >
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Applayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:blogId" element={<Blog1 />} />
            <Route path="/blog/createblogform" element={<CreateBlogForm />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="team" element={<Team />} />
            <Route path="pay" element={<StripeCheckoutPage />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
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
