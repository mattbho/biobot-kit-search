import { FC } from "react";
import { debounce } from "lodash";
import AsyncSelect from "react-select/async";
import { Kit } from "@/types/kit";
import { ActionMeta, SingleValue } from "react-select";

interface AutoCompleteProps {
  setSelectedOption: (option: Kit | null) => void;
  defaultOptions: Kit[];
}

export const AutoComplete: FC<AutoCompleteProps> = ({ setSelectedOption, defaultOptions }) => {

  const fetchOptions = debounce(
    (
      inputValue: string = "",
      callback: (options: Kit[]) => void
    ) => {
      const url = new URL("http://localhost:3000/api/kits/search");
      url.searchParams.set("q", inputValue);

      fetch(url)
        .then(response => response.json())
        .then(data => callback(data));
    },
    500);

  const handleChange = (
    newValue: SingleValue<Kit>,
    _actionMeta: ActionMeta<Kit>
  ) => {
    setSelectedOption(newValue);
  };


  return (
    <div className="w-full">
      <AsyncSelect
        loadOptions={fetchOptions}
        id="select-kit"
        instanceId="select-kit"
        defaultOptions={defaultOptions}
        cacheOptions={false}
        placeholder="Search for test kits"
        getOptionLabel={(option: Kit) => option.label_id}
        onChange={handleChange}
        isClearable
      />
    </div>
  );
};
