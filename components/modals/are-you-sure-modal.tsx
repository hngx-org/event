import { EventManagementModalType } from '@/@types';
import { MessageQuestionSVG, BackArrowSVG, CancelSVG } from '@/public/assets/icons/event-management-svg';

const AreYouSureModal = ({ message, onclose, onNext }: EventManagementModalType) => {

    return (
        <div className="w-max h-max px-14 py-12 rounded-2xl bg-[#FEFEFE] flex flex-col gap-8 justify-center items-center">
            <h1 className="font-montserrat text-[40px] text-center font-bold text-grey-500">
                Are you sure?
            </h1>
            <div className="max-w-[345px] flex flex-col gap-6 items-center">
                <MessageQuestionSVG />
                <p className="text-base text-center text-grey-100 font-semibold font-sans">{message}</p>
                <div className="flex justify-center items-center gap-6">
                    <button
                        onClick={onclose}
                        className="py-[18px] px-6 text-[#800000]  font-bold bg-transparent border border-[#800000] rounded-lg text-center flex items-center justify-center gap-2"
                        type="button"
                    >
                        <BackArrowSVG />
                        <span>Go Back</span>
                    </button>

                    <button
                        onClick={onNext}
                        className="py-[18px] px-6 text-white font-bold bg-secondary-300 rounded-lg text-center flex items-center justify-center gap-2"
                        type="button"
                    >
                        <CancelSVG />
                        <span>Cancel</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AreYouSureModal
