import {PlusIcon} from "@heroicons/react/24/outline";
import React from "react";
import {useState} from "react";

const FAQs = [
  {
    question: "How do I register?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, harum! Facilis doloribus aspernatur, cupiditate amet, ipsa aliquam reprehenderit nostrum minus expedita temporibus deleniti ea vitae. Explicabo laboriosam non sequi laudantium fugiat dolorem deleniti quas tempore. Pariatur magnam hic aliquid tempora quae ex minima culpa nobis molestias architecto? Beatae, hic? Voluptatum.",
  },
  {
    question: "How do I join an event?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, harum! Facilis doloribus aspernatur, cupiditate amet, ipsa aliquam reprehenderit nostrum minus expedita temporibus deleniti ea vitae. Explicabo laboriosam non sequi laudantium fugiat dolorem deleniti quas tempore. Pariatur magnam hic aliquid tempora quae ex minima culpa nobis molestias architecto? Beatae, hic? Voluptatum.",
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
  const [currentItem, setCurrentItem] = useState(0);
  const toggleShow = (idx: number) => {
    setCurrentItem(idx);
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
            <>
              <div
                key={idx}
                className='flex justify-between mb-4 px-2 transition-all duration-300 ease-in-out'
              >
                <h5>{item.question}</h5>
                <PlusIcon
                  className='w-5 cursor-pointer'
                  onClick={() => toggleShow(idx)}
                />
              </div>
              <div
                className={`px-2 mb-2 transition-max-height transform ${
                  idx === currentItem ? "max-h-[600px]" : "max-h-0"
                }`}
              >
                {item.answer}
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
