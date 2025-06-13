import {
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:5173/payment-success',
      },
    });

    if (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        type="submit"
        className="mt-4 w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        disabled={!stripe}
      >
        Pay Now
      </button>
    </form>
  );
}

export default CheckoutForm;
