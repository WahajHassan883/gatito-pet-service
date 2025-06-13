import { useNavigate } from 'react-router-dom';

function PaymentSuccess() {
  const navigate = useNavigate();
  return (
    <div className="mt-10 text-center">
      <h1 className="text-2xl font-bold text-green-600">Payment Successful!</h1>
      <p className="mt-2">Thank you for your purchase.</p>
      <button
        onClick={() => navigate('/')}
        className="w-50 mx-auto mb-10 mt-10 block rounded bg-[#FB7E46] px-6 py-3 text-lg font-bold uppercase text-black hover:bg-orange-600"
      >
        Back to Home Page
      </button>
    </div>
  );
}

export default PaymentSuccess;
