// Component1.tsx
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import BlackPhysical from '@/public/images/black-physical.png';
import BlackVirtual from '@/public/images/black-virtual.png';
import RedPhysical from '@/public/images/red-physical.png';
import RedVirtual from '@/public/images/red-virtual.png';

const Component1: React.FC<{ onBack: () => void, onProceed: () => void, onIdSelected: (id: number) => void }> 
= ({ onBack, onProceed, onIdSelected}) => {
    const [selectedButton, setSelectedButton] = useState<number | null>(2);

  const handleButtonClick = (buttonId:number) => {
    setSelectedButton(buttonId);
    onIdSelected(buttonId);
  };

  const isButtonSelected = (buttonId:number) => {
    return selectedButton === buttonId;
  };

  return (
    <div>
      {/* Your content here */}
      <div className='p-4 align-center text-center text-black w-full'>
        <h1 className='font-monteserrat text-2xl pb-2'>Create An Event </h1>
        <p className='font-montserrat align-middle text-sm text-gray-400 pb-3'>What kind of event would you like to create?</p>
        <div className="w-full h-full flex justify-between items-center">
            <div className="w-44 h-3 mr-2 bg-secondary-50 rounded-full"></div>
            <div className="w-44 h-3 mr-2 bg-secondary-50 rounded-full"></div>
            <div className="w-44 h-3 mr-2 bg-secondary-50 rounded-full"></div>
            <div className="w-44 h-3 mr-2 bg-secondary-50 rounded-full"></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 m-5 '>
      <button
          className={`block md:flex m-3 w-full p-8 rounded-2xl border-2 ${
            selectedButton === 1 ? 'text-red-900 border-red-900' : 'text-zinc-400 border-zinc-400'
          } flex flex-col justify-center items-center gap-8 xs:block`}
          onClick={() => handleButtonClick(1)}
        >
          <div></div>
          <Image src={selectedButton === 1 ? RedPhysical : BlackPhysical} alt='physical' height={40} width={40}/>
          <div className="flex flex-col justify-center items-start gap-2">
            <div className={`self-stretch ${
            selectedButton === 1 ? 'text-red-900 ' : 'text-zinc-400 '
          } text-red-900 text-2xl font-bold font-montserrat leading-loose`}>
              Physical Event
            </div>
            <div className={` text-center ${
            selectedButton === 1 ? 'text-red-900 ' : 'text-zinc-400 '
          } text-base font-semibold font-nunito leading-normal`}>
              An event that takes place at a physical location and attendees join in person.
            </div>
          </div>
          <div className={`w-6 h-6  rounded-2xl border-2 ${ selectedButton ===1 ? 'bg-red-900 border-red-900' :  'bg-zinc-400 border-zinc-400' } `}/>
        </button>

        <button
          className={`block md:flex m-3 w-full p-8 rounded-2xl border-2 ${
            selectedButton === 2 ? 'text-red-900 border-red-900' : 'text-zinc-400 border-zinc-400'
          } flex flex-col justify-center items-center gap-8 xs:block`}
          onClick={() => handleButtonClick(2)}
        >
          <Image src={selectedButton === 2 ? RedVirtual : BlackVirtual} alt='physical' height={40} width={40}/>
          <div className="flex flex-col justify-center items-center gap-1">
              <div className={`self-stretch ${
            selectedButton === 2 ? 'text-red-900 ' : 'text-zinc-400 '
          } text-red-900 text-2xl font-bold font-montserrat leading-loose`}>Virtual Event</div>
            <div className={`text-center ${
            selectedButton === 2 ? 'text-red-900 ' : 'text-zinc-400 '
          } text-base font-semibold font-nunito leading-normal`}>
              An event that takes place online and attendees join using web conferencing services.
            </div>
          </div>
          <div className={`w-6 h-6  rounded-2xl border-2 ${ selectedButton ===2 ? 'bg-red-900 border-red-900' :  'bg-zinc-400 border-zinc-400' } `}/>
        </button>
        </div>
        </div>
      <button onClick={onProceed}><div className="w-40 h-12 px-12 mb-2 py-4 bg-red-900 rounded-lg justify-center items-center gap-2 inline-flex">
  <div className="text-center text-stone-200 text-base font-bold font-['Nunito'] leading-none">Proceed</div>
</div></button>
      
    </div>
  );
};

export default Component1;




