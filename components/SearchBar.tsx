"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { fetchData } from "@/utility/api";
import { SearchBarProps } from "@/utility/types";

const SearchBar: React.FC<SearchBarProps> = ({
  setDictionaryEntries,
  toggleActiveError,
  setUserInput,
}) => {
  const [word, setWord] = useState<string>("");
  const [isEmptyInput, setIsEmptyInput] = useState<boolean>(false);

  const handleChange = (input: string) => {
    setWord(input);
  };

  const handleSearch = async (input: string) => {
    try {
      setIsEmptyInput(false);
      toggleActiveError(false);
      setUserInput(input);

      const data = await fetchData(input);

      if (input === "") {
        setIsEmptyInput(true);
      } else if (data === 404) {
        toggleActiveError(true);
      } else {
        setDictionaryEntries(data);
      }
    } catch (error) {
      throw error;
    }
  };

  const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleSearch(word);
  };

  return (
    <div className="flex w-full flex-col">
      <div className="relative flex items-center">
        <input
          type="search"
          className={`${isEmptyInput ? "ring ring-err ring-opacity-50" : ""} w-full rounded-2xl bg-dark-700 py-3.5 pl-6 pr-12 font-bold text-dark-100 placeholder-dark-100 placeholder-opacity-25 focus:outline-none focus:ring focus:ring-primary-100  focus:ring-opacity-50 dark:bg-dark-200 dark:text-white dark:placeholder-white dark:placeholder-opacity-25 dark:focus:ring-primary-500 md:h-16 md:text-xl`}
          placeholder="Search for any word..."
          aria-label="Search"
          value={word}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handleEnterKey}
        />
        <MagnifyingGlassIcon
          className="absolute right-5 h-5 w-5 cursor-pointer text-primary-100 dark:text-primary-500 md:h-6 md:w-6"
          onClick={() => handleSearch(word)}
        />
      </div>
      {isEmptyInput ? (
        <p className=" mt-2 text-sm text-err">Whoops, can't be empty…</p>
      ) : null}
    </div>
  );
};
export default SearchBar;
