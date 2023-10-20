import React, {useState, useEffect} from "react";

const OnboardingLayout: React.FC = () => {
  const [categories, _] = useState<Record<string, string[]>>({
    Music: [
      "Pop",
      "Afrobeats",
      "Dancehall",
      "Raggae",
      "Calypso",
      "Hip Hop/Rap",
      "R&B/Soul",
      "Electronic/Dance",
      "Gospel",
      "Country",
      "Indie",
      "EDM",
      "Folk",
    ],
    Sport: [
      "Basketball",
      "Football",
      "Volleyball",
      "Hockey",
      "Boxing",
      "Skydiving",
      "Snowboarding",
      "Golf",
      "lawn Tennis",
    ],
    Games: [
      "Racing",
      "Puzzle",
      "Sandbox",
      "Board games",
      "First-Person Shooter",
      "Arcade",
      "Role-Playing (RPG)",
      "Adventure",
      "Action",
      "Simulation",
    ],
    Tech: [
      "Design",
      "Programming",
      "Web Development",
      "Devops",
      "Artificial Intelligence",
      "Golang",
      "SQL",
      "JavaScript",
      "Python",
      "PHP",
      "Elixir",
      "Ethical Hacking",
    ],
  });

  const [state, selectedState] = useState<string>("");
  const [step, setStep] = useState<any>(1);
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelected = (item: string): any => {
    if (!selected.includes(item)) {
      setSelected((prev) => [...prev, item]);
    } else {
      const updatedSelections = selected.filter((elem) => elem !== item);
      setSelected(updatedSelections);
    }
  };

  const handleSelectChange = (e: any) => {
    selectedState(e.target.value);
  };

  const handleStep = (goTo: number) => {
    setStep(goTo);
  };

  return (
    <div className='mt-40 md:mt-24  max-w-7xl mx-auto px-4 xl:px-0 noSelect transition-all ease-out duration-1000'>
      <div className='md:py-24 lg:px-36'>
        <>
          <div className='flex w-full justify-between mb-2'>
            <div
              className={`border rounded-md p-2 cursor-pointer ${
                step === 1 ? "hidden" : "block"
              }`}
              onClick={() => handleStep(1)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M15.75 19.5L8.25 12l7.5-7.5'
                />
              </svg>
            </div>

            <div
              className={`border rounded-md p-2 cursor-pointer ${
                step === 2 ? "hidden" : "block"
              }`}
              onClick={() => handleStep(2)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M8.25 4.5l7.5 7.5-7.5 7.5'
                />
              </svg>
            </div>
          </div>

          <p className='text-primary-400 font-sans font-bold mb-2'>
            Step {step} of 2
          </p>
          <div className='w-full flex gap-x-2 mb-8'>
            <div
              className={` w-1/2 h-3 rounded-lg ${
                step == 1 ? "bg-primary-200" : "bg-primary-50 "
              }`}
            >
              {" "}
            </div>
            <div
              className={`w-1/2 h-3 rounded-lg ${
                step == "2" ? "bg-primary-200" : "bg-primary-50"
              }`}
            >
              {" "}
            </div>
          </div>
          {step == 1 ? (
            <>
              <p className='font-semibold font-montserrat mb-2'>
                Let us know which events you&apos;re passionate about
              </p>
              <p className='text-grey-300 text-sm mb-4'>
                Choose up to 5 tags from each event category that you&apos;d
                like to encounter more frequently.
              </p>

              <div>
                {Object.keys(categories).map((item: any, idx) => {
                  return (
                    <div key={idx} className='mb-10'>
                      <p className='mb-4 font-montserrat font-semibold text-xl'>
                        {item}
                      </p>

                      <div className='flex flex-wrap gap-4'>
                        {categories[item].map((elem: string, idx: number) => {
                          return (
                            <button
                              disabled={
                                selected.length === 5 &&
                                !selected.includes(elem)
                              }
                              key={idx}
                              onClick={() => handleSelected(elem)}
                              className={`rounded-md border border-black px-3 py-1 ${
                                selected.includes(elem)
                                  ? "bg-primary-300 text-white border-0"
                                  : ""
                              } ${
                                selected.length === 5
                                  ? "cursor-not-allowed"
                                  : "cursor-default"
                              }`}
                            >
                              {elem}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div>
              <p className='font-montserrat font-semibold text-lg mb-4'>
                Select your preferred outing location, we&apos;ll keep it on
                record for you
              </p>
              <p className='mb-4'>Choose or enter location</p>

              <select
                className='w-full border-b pb-2 border-black focus:outline-none'
                onChange={handleSelectChange}
              >
                <option className='text-[#9CA3AF]'>Select your state</option>
                {[
                  "Lagos",
                  "Abuja",
                  "Edo",
                  "Kaduna",
                  "Jos",
                  "Benin",
                  "kogi",
                ].map((item, idx) => {
                  return (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default OnboardingLayout;
