import {PlusIcon} from "@heroicons/react/24/outline";
import React from "react";

const FAQs = [
  {
    question: "How do I register?",
    answer: "",
  },
  {
    question: "How do I join an event?",
    answer: "",
  },
  {
    question: "How can I create an event?",
    answer: "",
  },
  {
    question: "Can I cancel my registration?",
    answer: "",
  },
  {
    question: "How do I manage my events?",
    answer: "",
  },
];

const FAQ = () => {
  return (
    <div className='px-4 lg:px-20 py-24 w-full'>
      <p className='text-3xl font-montserrat font-medium mb-6'>FAQs</p>
      <p className='text-[#666] max-w-xl mb-10'>
        Find answers to common questions about our platform, registration
        process, and event management.
      </p>
      <div className='w-full'>
        <hr className='mb-4' />
        {FAQs.map((item, idx) => {
          return (
            <>
              <div key={idx} className='flex justify-between mb-4 px-2'>
                <h5>{item.question}</h5>
                <PlusIcon className='w-5 cursor-pointer' />
              </div>

              <hr className='mb-3' />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
