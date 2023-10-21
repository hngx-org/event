import React, { useState } from 'react';
interface Component4Props {
    onBack: () => void;
    onProceed: (e: React.FormEvent) => void;
    handleChange: (name: string, value: string) => void;
    data: any;
  }
const Component4: React.FC<Component4Props> = 
    ({ onBack, onProceed, handleChange, data}) => {
  const [isDateInput, setIsDateInput] = useState(false);
  return (
    <div>
      <div className='p-4 align-center text-center text-black'>
        <h1 className='font-monteserrat text-2xl pb-2'>Create An Event</h1>
        <p className='font-montserrat align-middle text-sm text-gray-400 pb-3'>
          Ticket Information - Enter the correct details
        </p>
        <div className="w-full h-full flex justify-between items-center">
          <div className="w-44 h-3 mr-2 bg-secondary-200 rounded-full"></div>
          <div className="w-44 h-3 mr-2 bg-secondary-200 rounded-full"></div>
          <div className="w-44 h-3 mr-2 bg-secondary-200 rounded-full"></div>
          <div className="w-44 h-3 mr-2 bg-secondary-50 rounded-full"></div>
        </div>
      </div>


      <div className='mb-3'>
        <form>
          <label htmlFor="event_location" className="text-neutral-700 text-base font-medium font-['Nunito'] leading-normal flex justify-start my-2">
          Event Platform Link*
          </label>
          <input
            type="text"
            name="location"
            className="w-full h-20 px-4 py-3 bg-white rounded-lg border border-neutral-400 text-base font-medium font-['Nunito'] my-1"
            placeholder="Please paste the link to the platform where the event would happen"
            required
            id="event_location"
            value={data.location}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />

          <div className='grid md:grid-cols-2 gap-2 grid-cols-1 justify-between align-middle my-3'>
            <div className='full'>
              <label htmlFor='payment' className="text-neutral-700 text-base font-medium font-['Nunito'] leading-normal flex justify-start my-3">
                Is this a free or Paid event?*
              </label>
              <select
                name="isPaidEvent"
                id="payment"
                className="w-full h-12 my-3 px-4 py-3 bg-white rounded-lg border border-neutral-400 text-base font-medium font-['Nunito']"
                required
                value={data.isPaidEvent}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              >
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
              </select>
            </div>
            <div className='w-full'>
              <label htmlFor='money' className="text-neutral-700 text-base font-medium font-['Nunito'] leading-normal flex justify-start my-3">Ticket Price</label>
              <input
                type='number'
                name="ticketPrice"
                className="w-full h-12 my-2 px-4 py-3 bg-white rounded-lg border border-neutral-400 text-base font-medium font-['Nunito']"
                placeholder='₦00,000.00'
                id='money'
                value={data.ticketPrice}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
          </div>
          <div className='grid md:grid-cols-2 gap-2 grid-cols-1 justify-between align-middle my-3'>
            <div className='w-full'>
              <label htmlFor='tickets' className="text-neutral-700 text-base font-medium font-['Nunito'] leading-normal flex justify-start">
                Number of Available tickets
              </label>
              <br />
              <input
                type="number"
                name="numberOfAvailableTickets"
                placeholder='00'
                className="w-full h-12 px-4 py-3 bg-white rounded-lg border border-neutral-400 text-base font-medium font-['Nunito']"
                value={data.numberOfAvailableTickets}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
            <div className='w-full'>
              <label htmlFor='closing_date' className="text-neutral-700 text-base font-medium font-['Nunito'] leading-normal flex justify-start">
                Registration Closing Date
              </label>
              <br />
              {isDateInput ? (
                <input
                  type="date"
                  required
                  name="registrationClosingDate"
                  onBlur={() => setIsDateInput(false)}
                  className="w-full h-12 px-4 py-3 bg-white rounded-lg border border-neutral-400 text-base font-medium font-['Nunito']"
                  value={data.registrationClosingDate}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
              ) : (
                <input
                  type="text"
                  required
                  name="registrationClosingDate"
                  placeholder="DD/MM/YY"
                  onFocus={() => setIsDateInput(true)}
                  className="w-full h-12 px-4 py-3 bg-white rounded-lg border border-neutral-400 text-base font-medium font-['Nunito']"
                  value={data.registrationClosingDate}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
              )}
            </div>
          </div>
          
          <button onClick={onBack} className='mr-3'>
            <div className="w-36 h-12 px-12 py-4 rounded-lg border border-red-900 justify-center items-center gap-2 inline-flex">
              <div className="text-center text-red-900 text-base font-bold font-['Nunito'] leading-none">Back</div>
            </div>
          </button>
          <button onClick={onProceed} type='submit'>
            <div className="w-40 h-12 px-12 py-4 bg-red-900 rounded-lg justify-center items-center gap-2 inline-flex">
              <div className="text-center text-stone-200 text-base font-bold font-['Nunito'] leading-none">Proceed</div>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Component4;
