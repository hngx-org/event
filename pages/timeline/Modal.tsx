import React, { useState } from 'react';
import Component1 from '@/components/CreateEvents/Component1';
import Component2 from '@/components/CreateEvents/Component2';
import Component3 from '@/components/CreateEvents/Component3';
import Component4 from '@/components/CreateEvents/Component4';
import Component4s from '@/components/CreateEvents/Component4s';
import Component5 from '@/components/CreateEvents/Component5';
import http from '@/http/interceptor';
import { FormState } from '@/@types';
import axios, { Axios, post } from 'axios';
const Modal: React.FC<{ isOpen: boolean, onClose: () => void }> = ({ isOpen, onClose }) => {
  const [currentComponent, setCurrentComponent] = useState(1);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormState>({
    location: '',
    isPaidEvent: 'Free',
    ticketPrice: '',
    numberOfAvailableTickets: '',
    registrationClosingDate: '',
    name: '',
    event_image: '',
    description: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    tags: []
  })
  const formDataEntries = Object.entries(formData);
  const eventData = { ...Object.fromEntries(formDataEntries)};
  const [allRequirementsMet, setAllRequirementsMet] = useState(false);
  const handleComponent3Update = (tags: string[]) => {
    setFormData({ ...formData, tags }); // Update formData with enteredWords
  };
  const handleBack = () => {
    if (currentComponent > 1) {
      setCurrentComponent(currentComponent - 1);
    }
  };
  const handleProceed = () => {
    // Check if all requirements are met
    if (currentComponent === 4 && allRequirementsMet) {
      setCurrentComponent(5); // Render Component 5
    } else if (currentComponent < 5) {
      setCurrentComponent(currentComponent + 1);
    }

    
  };
  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  // const sendDataToAPI = (data: FormState) => {
  //   fetch('https://wetindeysup-api.onrender.com/api/events', {
  //     method: 'POST',
  //     headers: {
  //       'accept': 'application/json',
  //       'Content-Type': 'multipart/form-data'
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then((responseData) => {
  //       console.log('Data sent to API and response received:', responseData);
  //     })
  //     .catch((error) => {
  //       console.error('Error sending data to API:', error);
  //     });
  // };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isPaid = formData.isPaidEvent === 'Paid'
    const eventData = {
      ...formData,
      isPaidEvent: isPaid,
    };
    console.log(eventData)
    // Check if all requirements are met
    const requirementsMet = (
        formData.name.trim() !== '' &&
        formData.description.trim() !== '' &&
        formData.startDate.trim() !== '' &&
        formData.startTime.trim() !== '' &&
        formData.endDate.trim() !== '' &&
        formData.location.trim() !== '' &&
        formData.isPaidEvent.trim() !== '' &&
        formData.ticketPrice.trim() !== '' &&
        formData.registrationClosingDate.trim() !== ''
      );
    if (requirementsMet) {
      setAllRequirementsMet(true);
      handleProceed();
      http.post('/events', {
        name: formData.name,
        description:formData.description,
        startDate: formData.startDate,
        startTime: formData.startTime,
        endDate: formData.endDate,
        endTime: formData.endTime,
        location: formData.location,
        tags: formData.tags,
        isPaidEvent: eventData.isPaidEvent, 
        eventLink: formData.location,
        ticketPrice: formData.ticketPrice,
        numberOfAvailableTickets: parseInt(formData.numberOfAvailableTickets),
        registrationClosingDate: formData.registrationClosingDate
      }).
      then(response => console.log(response))
      .catch(err => console.log(err))
    } else {
      setAllRequirementsMet(false);
    }
  };

  if (!isOpen) {
    return null;
  }
  const ValidateHandleProgress = () => {
  };

  const getComponentByIndex = (index: number) => {
    switch (index) {
      case 1:
        return <Component1 onBack={handleBack} onProceed={handleProceed} onIdSelected={setSelectedId}/>;
      case 2:
        return <Component2 onBack={handleBack}
        onProceed={handleProceed}
        handleChange={handleChange}
        data={formData}/>;
      case 3:
        return <Component3 
        onBack={handleBack} 
        onProceed={handleProceed} 
        updateFormData={handleComponent3Update}/>
      case 4:
        return selectedId === 1 ? (<Component4s onBack={handleBack}
        onProceed={handleSubmit}
        handleChange={handleChange}
        data={formData}/>) : (<Component4 onBack={handleBack}
        onProceed={handleSubmit}
        handleChange={handleChange}
        data={formData}/>);
      case 5:
        return <Component5 onBack={handleBack} onProceed={handleProceed} />;
      default:
        return null;
    }
  };

  return isOpen ? (
    <div className='fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50'>
      <div className="modal text-center md:w-3/4 lg:w-1/2">
        <div className="modal-content bg-white p-4 items-center rounded-2xl modal w-full mx-auto">
          {getComponentByIndex(currentComponent)}
          <button onClick={onClose} className="w-f ull xs:w-96 px-20 mt-2 xs:px-20 py-4 bg-red-900 rounded-lg">
          <div className=" text-white text-base font-bold font-['Nunito'] leading-none xs:text-sm">Go Back to Timeline</div>
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
