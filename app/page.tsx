"use client";
import {
  Definition,
  DropDown,
  Toggle,
  SearchBar,
  ErrorPage,
} from "@/components";
import { useState } from "react";
import { APIEntry } from "@/utility/types";
import { BookOpenIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [dictionaryEntries, setDictionaryEntries] = useState<APIEntry[]>([]);
  const [isActiveError, setIsActiveError] = useState<boolean>(false);

  const [userInput, setUserInput] = useState<string>("");
  const toggleActiveError = (err: boolean) => {
    setIsActiveError(err);
  };
  console.log(dictionaryEntries);
  return (
    <div className="px-6 md:px-10 lg:px-80">
      {/* Header Section */}
      <div className=" flex items-center py-6 md:py-12">
        <BookOpenIcon className=" mr-10 h-10 text-primary-100 dark:text-dark-500 md:h-12" />
        <div className="group flex w-full items-center justify-end space-x-3 md:space-x-5">
          <DropDown />
          <div className="mx-4 h-8 w-[1px] bg-dark-700 shadow-sm dark:bg-dark-300  md:mx-6 " />
          <Toggle />
        </div>
      </div>
      {/* Search Bar */}
      <div className="mb-6 flex justify-center md:mb-10">
        <SearchBar
          setDictionaryEntries={setDictionaryEntries}
          toggleActiveError={toggleActiveError}
          setUserInput={setUserInput}
        />
      </div>
      {/* Main Page */}
      <div>
        {userInput === "" ? null : isActiveError ? (
          <div className=" mt-40 md:mt-32">
            <ErrorPage userInput={userInput} />
          </div>
        ) : dictionaryEntries ? (
          <Definition dictionaryEntries={dictionaryEntries} />
        ) : null}
      </div>
    </div>
  );
}
/*
  Search bar handles word search
  Send data to page

*/
