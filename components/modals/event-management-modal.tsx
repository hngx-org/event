import { EventManagementModalType } from '@/@types';
import { useState } from 'react';
import AreYouSureModal from './are-you-sure-modal';
import RegisterSuccessful from './register-successful';

const EventManagementModal = ({ title, message, text, route, button, onclose }: EventManagementModalType) => {
    const [nextModal, setNextModal] = useState<boolean>(false)

    const onNext = () => setNextModal(true)

    return (
        <>
            {!nextModal ? (
                <div className="w-full h-screen fixed top-0 left-0 border flex justify-center items-center bg-[rgba(59,59,59,0.65)]">
                    <AreYouSureModal {...{ title, message, text, route, button, onclose, onNext }} />
                </div>
            ) : (
                    <RegisterSuccessful {...{ title, text, route, button }} />
            )
            }
        </>
    )
}

export default EventManagementModal
