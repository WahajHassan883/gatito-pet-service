import { useState } from 'react';

const fqaData = [
  {
    question: 'What services do you offer?',
    answer:
      "We offer pet grooming, dog walking, and overnight care services tailored to your pet's needs.",
  },
  {
    question: 'How do I book a service?',
    answer:
      'You can book through our website or call us directly at 648-423-2785.',
  },
  {
    question: 'What are your rates?',
    answer:
      'Rates vary by service and duration. Check our Services page for full pricing.',
  },
  {
    question: 'Do you offer overnight care?',
    answer: 'Yes, we provide safe and comfortable overnight care for pets.',
  },
  {
    question: 'Do you currently have insurance coverage?',
    answer: "Yes, we're fully insured to ensure safety and peace of mind.",
  },
];

function FQA() {
  const [question, setQuestion] = useState(null);

  const toggle = (index) => {
    setQuestion(question === index ? null : index);
  };

  return (
    <div className="px-6 py-12">
      <h1 className="mb-10 text-5xl font-extrabold uppercase tracking-tight text-[#27221F]">
        Frequently Asked Questions
      </h1>

      <div className="flex items-start gap-6">
        <div className="flex flex-col items-start">
          <img
            src="./kitty.png"
            alt="Cat"
            className="h-[390px] w-[260px] rounded-lg object-cover shadow-md"
          />
          <div className="mt-4">
            <p className="text-sm font-extrabold uppercase text-[#27221F]">
              Have question?
            </p>
            <p className="text-sm text-gray-700">Contact us at 648-423-2785.</p>
          </div>
        </div>

        <div className="flex w-full flex-col space-y-3">
          {fqaData.map((faq, index) => (
            <div key={index} className="rounded-md bg-white px-5 py-4 shadow">
              <div className="flex items-center justify-between">
                <p className="text-xl font-extrabold uppercase text-[#27221F]">
                  {faq.question}
                </p>
                <button
                  onClick={() => toggle(index)}
                  className="text-2xl font-bold text-[#27221F] focus:outline-none"
                >
                  {question === index ? '-' : '+'}
                </button>
              </div>
              {question === index && (
                <p className="mt-3 text-lg text-[#27221F]">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FQA;
