import React, { useState, KeyboardEvent, useEffect } from 'react';
interface Component3Props {
    onBack: () => void;
    onProceed: () => void;
    updateFormData: (enteredWords: string[]) => void; // New prop for updating formData
  }
  

const Component3: React.FC<Component3Props> = ({ onBack, onProceed, updateFormData}) => {
    const [inputText, setInputText] = useState('');
    const [tags, setTags] = useState<string[]>([]);
  
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter' && inputText.trim() !== '') {
            e.preventDefault()
            setTags([...tags, inputText]);
            setInputText('');
        }
    };
  
    const handleSuggestionClick = (suggestion: string) => {
        // Add the clicked suggestion to the enteredWords array
        setTags([...tags, suggestion]);
    };
  
    const clearAll = () => {
        setTags([]);
        setInputText('');
    };

    const handleRemoveWord = (index: number) => {
        const updatedWords = [...tags];
        updatedWords.splice(index, 1);
        setTags(updatedWords);
    };
    useEffect(() => {
        console.log('useeffect called')
        updateFormData(tags);
      }, [tags]);

    const suggestions = [
        "Pop",
        "Hip-Hop/Rap",
        "EDM",
        "Afrobeats",
        "Folk",
        "R&B/Soul",
        "Basketball",
        "Dancehall",
        "Electronic/Dance",
        "Volleyball",
        "Raggae",
        "Badmiton",
        "Calypso",
        "Gospel",
        "Country",
        "Hockey",
        "Alternative",
        "Football",
        "Golf",
        "Indie",
    ];
    
    return (
        <div>
            <div className='p-4 align-center text-center text-black'>
                <h1 className='font-monteserrat text-2xl pb-2'>Create An Event</h1>
                <p className='font-montserrat align-middle text-sm text-gray-400 pb-3'>
                    Event Tags - Choose event tags for easy discovery and timeline visibility.
                </p>
                <div className="w-full h-full flex justify-between items-center">
                    <div className="w-44 h-3 mr-2 bg-secondary-200 rounded-full"></div>
                    <div className="w-44 h-3 mr-2  bg-secondary-200 rounded-full"></div>
                    <div className="w-44 h-3 mr-2 2 bg-secondary-50 rounded-full"></div>
                    <div className="w-44 h-3 mr-2 2 bg-secondary-50 rounded-full"></div>
                </div>
            </div>
            <form>
                <div className='my-2'>
                    <div className='h-full flex flex-wrap'>
                        <div className="flex flex-wrap justify-between gap-2 ">
                            {tags.map((word, index) => (
                                <div key={index} className="px-3 py-2 m-2 bg-stone-200 rounded-lg border
                                border-stone-400 justify-center items-center gap-1 flex">
                                    <h2 className="text-center text-zinc-900 text-base font-semibold font-['Nunito'] leading-none">{word}</h2>
                                    <button
                                        onClick={() => handleRemoveWord(index)}
                                        className="text-center text-red-900 text-base font-bold font-['Nunito'] leading-none cursor-pointer"
                                    >
                                        x
                                    </button>
                                </div>
                            ))}
                            <div onClick={clearAll} className="text-center text-red-900 text-base font-bold font-['Nunito'] underline leading-normal cursor-pointer">
                                Clear All
                            </div>
                        </div>
                    </div>
                    <input
                        type="text"
                        value={inputText}
                        onChange={handleInput}
                        onKeyDown={handleKeyDown}
                        placeholder='Enter a tag that describes your event and press "ENTER"'
                        className="w-full h-12 px-4 py-3 bg-white rounded-lg border border-neutral-400 text-base font-medium font-['Nunito']"
                    />
                </div>
                <div className='my-2'>
                    <div className="text-neutral-700 text-base font-medium font-['Nunito'] leading-normal text-left">Suggestions</div>
                    <div className="h-full flex flex-wrap">
                        <div className='flex flex-wrap justify-between gap-2'>
                            {suggestions.map((suggestion, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleSuggestionClick(suggestion)}
                                    className="px-3 py-2 bg-white rounded-lg border border-neutral-500 justify-center items-center gap-1 flex cursor-pointer"
                                >
                                    <div className="justify-center items-center flex">
                                        <div className="text-neutral-600 text-base font-normal font-['Nunito'] leading-normal">{suggestion}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <button onClick={onBack} className='mr-3'>
                    <div className="w-36 h-12 px-12 py-4 rounded-lg border border-red-900 justify-center items-center gap-2 inline-flex">
                        <div className="text-center text-red-900 text-base font-bold font-['Nunito'] leading-none">Back</div>
                    </div>
                </button>
                <button onClick={onProceed} type='submit'>
                    <div className="w-40 h-12 px-12 py-4 bg-red-900 rounded-lg justify-center items-center gap-2 inline-flex " >
                        <div className="text-center text-stone-200 text-base font-bold font-['Nunito'] leading-none">Proceed</div>
                    </div>
                </button>
            </form>
        </div>
    );
};

export default Component3;
