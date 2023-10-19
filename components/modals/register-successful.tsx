import { SuccessProps } from '@/@types';
import { useRouter } from 'next/router';

export default function RegisterSuccessful({ title, text, route, button }: SuccessProps) {
    const router = useRouter();

    const handleClick = (e: any) => {
        e.preventDefault()
        router.push(`/${route}`)
    }

    return (
        <div className="w-full h-screen fixed top-0 left-0 border flex justify-center items-center bg-[rgba(59,59,59,0.65)]">
            <div className="max-w-[586px] w-full h-max px-14 py-12 rounded-2xl bg-[#FEFEFE] flex flex-col gap-8 justify-center items-center ">
                <h1 className="font-montserrat text-[40px] text-center font-bold text-grey-500">{title}</h1>
                <div className="max-w-[363px] flex flex-col gap-6 items-center">
                    <span className="p-6 flex items-center justify-center rounded-full border-[10px] border-[#E6FCDE] bg-[#CCFABD]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M25.6673 12.9267V14C25.6659 16.5158 24.8512 18.9638 23.3449 20.9788C21.8385 22.9938 19.7211 24.4679 17.3086 25.1812C14.896 25.8945 12.3175 25.8089 9.95753 24.937C7.59761 24.0652 5.58275 22.4538 4.21344 20.3433C2.84413 18.2327 2.19374 15.7361 2.35927 13.2257C2.52481 10.7153 3.49739 8.32572 5.13198 6.41326C6.76656 4.50079 8.97557 3.16795 11.4295 2.61351C13.8835 2.05907 16.451 2.31273 18.749 3.33667M25.6673 4.66667L14.0007 16.345L10.5007 12.845" stroke="#30980C" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    <p className="text-base text-center text-grey-100 font-semibold font-sans">{text}</p>
                    <button onClick={handleClick} className="py-[18px] text-white font-bold bg-secondary-300 w-[363px] rounded-lg text-center" type="button">{button}</button>
                </div>
            </div>
        </div>
    )
}