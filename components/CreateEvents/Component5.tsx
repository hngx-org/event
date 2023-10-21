import React from 'react';
const Component5: React.FC<{ onBack: () => void, onProceed: () => void }> = ({ onBack, onProceed }) => {
  return (
    <div className='text-center mb-3'>
      <div className="w-full xs:w-80 sm:w-96 lg:w-120 xl:w-160 h-80 flex-col xs:flex justify-center items-center gap-8 inline-flex mb-3">
  <div className="flex-col justify-start items-start gap-4 xs:gap-2 flex">
    <div className="self-stretch text-neutral-700 text-4xl font-bold font-['Montserrat'] leading-10 xs:text-3xl">Event Creation Successful</div>
  </div>
  <div className="rounded-xl flex-col justify-start items-center gap-8 xs:gap-6 flex">
    <div className="w-20 h-20 p-6 xs:w-16 xs:h-16 bg-green-200 rounded-full border-8 border-green-100 justify-center items-center inline-flex">
      <div className="w-7 h-7 relative xs:w-6 xs:h-6 flex-col justify-start items-start flex" />
    </div>
    <div className="w-full xs:w-80 text-center text-neutral-500 text-base font-semibold font-['Nunito'] leading-normal xs:text-sm">
        Your event has been successfully created! Promote your event to attract attendees.
    </div>
  </div>
</div>

    </div>
  );
};

export default Component5;
