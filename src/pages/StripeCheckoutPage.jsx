import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // ⬅️ Add this
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../features/payment/CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function StripeCheckoutPage() {
  const location = useLocation();
  const price = location.state?.price;

  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    if (!price) return;

    const fetchClientSecret = async () => {
      const res = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ price }),
      });

      const data = await res.json();
      setClientSecret(data.clientSecret);
    };

    fetchClientSecret();
  }, [price]);

  const appearance = { theme: 'stripe' };
  const options = { clientSecret, appearance };

  if (!price) return <p className="text-center text-red-500">Missing price</p>;

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded bg-white p-6 shadow">
        <h2 className="mb-4 text-center text-xl font-semibold">
          Buy This Blog: {price}$
        </h2>

        {clientSecret && (
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </div>
  );
}

export default StripeCheckoutPage;
