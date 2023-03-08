import { useState } from 'react';


export default function Home() {
  const [selectedOption, setSelectedOption] = useState<string>('');

  return (
    <div className="text-3xl font-bold underline">Hello World</div>
  )
}
