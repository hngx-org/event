import React from "react";
import {useState} from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  return (
    <div className='w-full max-w-7xl bg-black px-4 py-20 lg:px-20 mb-16 text-white  mx-auto'>
      <div className='max-w-lg'>
        <p className='font-montserrat text-3xl lg:text-4xl font-semibold mb-4'>
          Stay Updated with Our Newsletter
        </p>
      </div>
      <p className='font-normal'>
        Subscribe to our newsletter to receive updates on new events and
        platform features.
      </p>
      <div className='flex w-full mt-4'>
        <input
          type='text'
          name='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='rounded px-3 py-2 mr-2 w-full lg:w-3/12 text-black'
          placeholder='Enter email address'
        />
        <button
          className='bg-primary-400 rounded-md px-6 text-center'
          onClick={() => {
            console.log(email);
          }}
        >
          Submit
        </button>
      </div>

      <p className='font text-xs font-mono mt-4'>
        By clicking Submit, you confirm that you agree with our Terms and
        Conditions.
      </p>
    </div>
  );
};

export default NewsLetter;
