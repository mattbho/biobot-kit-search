import { FC, useState } from "react";
import { AutoComplete } from "@/components/AutoComplete";
import { Result } from "@/components/Result";

import { Kit } from "@/types/kit";

interface HomeProps {
  defaultOptions: Kit[];
}

export async function getServerSideProps() {
  const url = new URL("http://localhost:3000/api/kits");
  const response = await fetch(url);
  const json: Kit[] = await response.json();

  return {
    props: {
      defaultOptions: json
    }
  };
}

const Home: FC<HomeProps> = ({ defaultOptions }) => {
  const [selectedOption, setSelectedOption] = useState<Kit | null>(null);

  const handleSetSelectedOption = (option: Kit | null) => {
    setSelectedOption(option);
  };

  return (
    <div className="sm:container mx-auto mt-5 flex flex-col justify-center items-center">
      <img className="w-80" src="https://biobot.io/wp-content/themes/biobot/assets/img/logo.svg" alt="logo" />
      <p className="font-bold text-white my-5">Welcome! Please search for your kit id to retrieve tracking information.</p>
      <AutoComplete setSelectedOption={handleSetSelectedOption} defaultOptions={defaultOptions} />
      {selectedOption && <Result kit={selectedOption} />}
    </div>
  );
};

export default Home;
