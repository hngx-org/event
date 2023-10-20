import {PlusIcon} from "@heroicons/react/24/outline";
import React from "react";
import {useState} from "react";

const FAQs = [
  {
    question: "How do I register?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, harum! Facilis doloribus aspernatur, culpa nobis molestias architecto? Beatae, hic? Voluptatum.",
  },
  {
    question: "How do I join an event?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.fugiat dolorem deleniti quas tempore. Pariatur magnam hic aliquid tempora quae ex minima culpa nobis molestias architecto? Beatae, hic? Voluptatum.",
  },
  {
    question: "How can I create an event?",
    answer: "Lorem ipsum dolor sit amet consectetur,cupiditate amet,",
  },
  {
    question: "Can I cancel my registration?",
    answer:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, harum! Facilis doloribus aspernatur, cupiditate amet,",
  },
  {
    question: "How do I manage my events?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, harum! Facilis doloribus aspernatur, cupiditate amet,",
  },
];

const FAQ = () => {
  const [currentItem, setCurrentItem] = useState(-1);

  const toggleShow = (idx: number) => {
    setCurrentItem((prevIdx) => (prevIdx === idx ? -1 : idx));
  };

  return (
    <div className='px-4 py-24 w-full max-w-7xl mx-auto'>
      <p className='text-3xl font-montserrat font-medium mb-6'>FAQs</p>
      <p className='text-[#666] max-w-xl mb-10'>
        Find answers to common questions about our platform, registration
        process, and event management.
      </p>
      <div className='w-full'>
        <hr className='mb-4' />
        {FAQs.map((item, idx) => {
          return (
            <div key={idx}>
              <div className='flex justify-between mb-3 px-2 transition-all ease-out duration-800'>
                <h5>{item.question}</h5>
                <PlusIcon
                  className='w-5 cursor-pointer'
                  onClick={() => toggleShow(idx)}
                />
              </div>
              <div
                className={`px-2 mb-2 transition-all transform ${
                  idx === currentItem
                    ? "h-auto translate-y-0 opacity-100"
                    : "h-0 -translate-y-3 opacity-0 overflow-hidden"
                }`}
              >
                {item.answer}
              </div>
              <hr className='mb-3' />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
