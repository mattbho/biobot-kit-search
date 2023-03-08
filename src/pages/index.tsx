import { useState } from 'react';
import { AutoComplete } from '@/components/AutoComplete';
import { Result } from '@/components/Result';

import { Kit } from '@/types/kit';


export default function Home() {
  const [selectedOption, setSelectedOption] = useState<Kit | null>(null);

  const handleSetSelectedOption = (option: Kit | null) => {
    setSelectedOption(option);
  }

  return (
    <div className="sm:container mx-auto mt-5 flex flex-col justify-center items-center">
      <img className='w-80' src='https://biobot.io/wp-content/themes/biobot/assets/img/logo.svg' alt='logo' />
      <p className='font-bold text-white my-5'>Welcome! Please search for your kit id to retrieve tracking information.</p>
      <AutoComplete setSelectedOption={handleSetSelectedOption} />
      {selectedOption && <Result kit={selectedOption} />}
    </div>
  )
}
