import { useRouter } from 'next/router'

export default function ForgotPassword(){
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push('/login')
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="max-w-[379px] font-sans">
        <div>
          <h1 className="font-montserrat text-[40px] font-bold text-grey-500">Forgot Password</h1>
          <p className='text-[#666] text-base font-medium'>Please enter the email address you signed up with.</p>
        </div>
        <div className="mt-8">
          <div className='flex flex-col gap-2 font-base font-medium'>
            <label className='text-grey-500' htmlFor="forgot-password">Email Address*</label>
            <input
              type="email"
              placeholder='Enter email address'
              className="p-3 text-grey-50 border border-grey-70 rounded-lg"
              required
            />
          </div>
          <button onClick={handleClick} className="py-[18px] mt-6 text-white bg-secondary-300 rounded-lg text-center w-full" type="button">Submit</button>
        </div>
      </div>
    </div>
  )
}