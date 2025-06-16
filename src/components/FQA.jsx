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
    <div className="px-4 py-10 md:px-10 lg:px-24">
      <h1 className="mb-10 text-3xl font-extrabold uppercase tracking-tight text-[#27221F] md:text-4xl lg:text-5xl">
        Frequently Asked Questions
      </h1>

      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        {/* Image & contact block */}
        <div className="flex flex-col items-center md:w-1/3 md:items-start">
          <img
            src="./kitty.png"
            alt="Cat"
            className="h-64 w-48 rounded-lg object-cover shadow-md sm:h-80 sm:w-56 md:h-[390px] md:w-[260px]"
          />
          <div className="mt-4 text-center md:text-left">
            <p className="text-sm font-extrabold uppercase text-[#27221F]">
              Have a question?
            </p>
            <p className="text-sm text-gray-700">Contact us at 648-423-2785.</p>
          </div>
        </div>

        {/* FAQ accordion */}
        <div className="flex-1 space-y-4">
          {fqaData.map((faq, index) => (
            <div key={index} className="rounded-md bg-white px-5 py-4 shadow">
              <div className="flex items-center justify-between gap-4">
                <p className="text-base font-bold uppercase text-[#27221F] sm:text-lg md:text-xl">
                  {faq.question}
                </p>
                <button
                  onClick={() => toggle(index)}
                  className="text-2xl font-bold text-[#27221F] focus:outline-none"
                  aria-label={`Toggle ${faq.question}`}
                >
                  {question === index ? '−' : '+'}
                </button>
              </div>
              {question === index && (
                <p className="mt-3 text-sm text-[#27221F] sm:text-base md:text-lg">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FQA;
