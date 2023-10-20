import React, { useState, ChangeEvent } from 'react';
interface Component2Props {
  onBack: () => void;
  onProceed: () => void;
  handleChange: (name: string, value: string) => void;
  data: any;
}
const Component2: React.FC<Component2Props> = 
({ onBack, onProceed, handleChange, data }) => {
  const [isDateInput, setIsDateInput] = useState<boolean>(false);
  const [isTimeInput, setIsTimeInput] = useState<boolean>(false);
  const isRequiredFieldsFilled = () => {
    // Define an array of required fields
    const requiredFields = ['name', 'description', 'startDate', 'startTime', 'endDate', 'endTime'];

    // Check if all required fields have values
    return requiredFields.every(field => data[field].trim() !== '');
  };
  const handleProceed = () => {
    if (isRequiredFieldsFilled()) {
      onProceed(); // Proceed to the next component
    } else {
      alert('Please fill in all required fields.'); // Show an error message or take any other desired action
    }
  };

  return (
    <div className='w-full'>
      <div className='p-4 align-center text-center text-black w-full'>
        <h1 className='font-monteserrat text-2xl pb-2'>Create An Event</h1>
        <p className='font-montserrat align-middle text-sm text-gray-400 pb-3'>
          Event Information - Enter the correct details
        </p>
        <div className="w-full h-full flex justify-between items-center">
          <div className="w-44 h-3 mr-2  bg-secondary-200 rounded-full"></div>
          <div className="w-44 h-3 mr-2  bg-secondary-50 rounded-full"></div>
          <div className="w-44 h-3 mr-2  bg-secondary-50 rounded-full"></div>
          <div className="w-44 h-3 mr-2  bg-secondary-50 rounded-full"></div>
        </div>
      </div>
      <div className="mb-3 w-full">
      <form className='w-full'>
        <div className='grid md:grid-cols-2 gap-2 grid-cols-1 justify-between align-middle my-3'>
          <div className='w-full'>
            <label htmlFor='event_name' className="text-neutral-700 text-base font-medium font-['Nunito'] leading-normal flex justify-start">
              Event name*
            </label>
            <br />
            <input
              type="text"
              id='event_name'
              name='name'
              required
              placeholder='Enter Event Name'
              className="w-full h-12 px-4 py-3 bg-white rounded-lg border border-neutral-400 text-base font-medium font-['Nunito']"
              value={data.name}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </div>
          <div className='w-full'>
            <label htmlFor='event_image' className="text-neutral-700 text-base font-medium font-['Nunito'] leading-normal flex justify-start">
              Event Image
            </label>
            <br />
            <input
              type="file"
              id='event_image'
              name='event_image'
              className="w-full h-12 px-4 py-3 bg-white rounded-lg border border-neutral-400 text-base font-medium font-['Nunito']"
              value={data.event_image}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </div>
        </div>
        <div className='text-left my-1 w-full'>
          <label htmlFor='event_description' className="text-neutral-700 text-base font-medium font-['Nunito'] leading-normal flex justify-start">
            Event description*
          </label>
          <br />
          <input
            type="text"
            id='event_description'
            name='description'
            required
            placeholder='Enter description'
            className="w-full h-20 px-4 py-3 bg-white rounded-lg border border-neutral-400 text-base align-top font-medium font-['Nunito']"
            value={data.description}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>
        <div className='grid md:grid-cols-2 gap-2 grid-cols-1 justify-between align-middle my-3'>
          <div className='w-full'>
            <label htmlFor='event_start_date' className="text-neutral-700 text-base font-medium font-['Nunito'] leading-normal flex justify-start">
              Event start date*
            </label>
            <br />
            {isDateInput ? (
              <input
                type="date"
                required
                id="event_start_date"
                name="startDate"
                onBlur={() => setIsDateInput(false)}
                className="w-full h-12 px-4 py-3 bg-white rounded-lg border border-neutral-400 text-base font-medium font-['Nunito']"
                value={data.startDate}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            ) : (
              <input
                type="text"
                required
                id="event_start_date"
                name="startDate"
                placeholder="MM/DD/YY"
                onFocus={() => setIsDateInput(true)}
                className="w-full h-12 px-4 py-3 bg-white rounded-lg border border-neutral-400 text-base font-medium font-['Nunito']"
                value={data.startDate}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            )}
          </div>
          <div className='w-full gap-2'>
            <label htmlFor='event_start_time' className="text-neutral-700 text-base font-medium font-['Nunito'] leading-normal flex justify-start">
              Event start time*
            </label>
            <br />
            {isTimeInput ? (
              <input
                type="time"
                required
                id="event_start_time"
                name="startTime"
                onBlur={() => setIsTimeInput(false)}
                value={data.startTime}
                className="w-full h-12 px-4 py-3 bg-white rounded-lg border border-neutral-400 text-base font-medium font-['Nunito']"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            ) : (
              <input
                type="text"
                required
                id="event_start_time"
                name="startTime"
                placeholder="Choose a time"
                onFocus={() => setIsTimeInput(true)}
                className="w-full h-12 px-4 py-3 bg-white rounded-lg border border-neutral-400 text-base font-medium font-['Nunito']"
                value={data.startTime}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            )}
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-2 grid-cols-1 justify-between align-middle my-3'>
          <div className='w-full'>
            <label htmlFor='event_end_date' className="text-neutral-700 text-base font-medium font-['Nunito'] leading-normal flex justify-start">
              Event End date*
            </label>
            <br />
            {isDateInput ? (
              <input
                type="date"
                required
                id="event_end_date"
                name="endDate"
                onBlur={() => setIsDateInput(false)}
                className="w-full h-12 px-4 py-3 bg-white rounded-lg border border-neutral-400 text-base font-medium font-['Nunito']"
                value={data.endDate}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            ) : (
              <input
                type="text"
                required
                id="event_end_date"
                name="endDate"
                placeholder="MM/DD/YY"
                onFocus={() => setIsDateInput(true)}
                className="w-full h-12 px-4 py-3 bg-white rounded-lg border border-neutral-400 text-base font-medium font-['Nunito']"
                value={data.endDate}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            )}
          </div>
          <div className='w-full'>
            <label htmlFor='event_end_time' className="text-neutral-700 text-base font-medium font-['Nunito'] leading-normal flex justify-start">
              Event End time*
            </label>
            <br />
            {isTimeInput ? (
              <input
                type="time"
                required
                id="event_end_time"
                name="endTime"
                onBlur={() => setIsTimeInput(false)}
                value={data.endTime}
                className="w-full h-12 px-4 py-3 bg-white rounded-lg border border-neutral-400 text-base font-medium font-['Nunito']"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            ) : (
              <input
                type="text"
                required
                id="event_end_time"
                name="endTime"
                placeholder="Choose a time"
                onFocus={() => setIsTimeInput(true)}
                className="w-full h-12 px-4 py-3 bg-white rounded-lg border border-neutral-400 text-base font-medium font-['Nunito']"
                value={data.endTime}
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
      <button onClick={handleProceed} type='submit'>
        <div className="w-40 h-12 px-12 py-4 bg-red-900 rounded-lg justify-center items-center gap-2 inline-flex " >
          <div className="text-center text-stone-200 text-base font-bold font-['Nunito'] leading-none">Proceed</div>
        </div>
      </button>
      </form>
      </div>
    </div>
  );
};

export default Component2;



  

  


