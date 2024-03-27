import React from "react";
import {
  DefinitionProps,
  APIEntry,
  Meaning,
  Definition,
} from "@/utility/types";
import { LinkIcon } from "@heroicons/react/24/outline";
import PlayBtn from "./PlayBtn";

const DefinitionPage: React.FC<DefinitionProps> = ({ dictionaryEntries }) => {
  let audio: string = "";

  if (dictionaryEntries[0]?.phonetics !== undefined) {
    for (let p of dictionaryEntries[0]?.phonetics) {
      if (p.audio === "") {
        continue;
      } else if (p.audio.includes("us")) {
        audio = p.audio;
        break;
      } else {
        audio = p.audio;
      }
    }
  }

  return (
    <div className="mb-20 md:mb-28">
      {/* Header Word Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-[32px] font-bold text-dark-100 dark:text-white md:mb-3 md:text-[64px] md:leading-tight">
            {dictionaryEntries[0]?.word}
          </h1>
          <p className="text-lg text-primary-100 dark:text-primary-500 md:text-2xl">
            {dictionaryEntries[0]?.phonetic}
          </p>
        </div>
        {/* Play button SVG */}
        {audio === "" ? null : <PlayBtn url={audio} />}
      </div>
      {dictionaryEntries.map((entry: APIEntry, index: number) => (
        <div key={index}>
          {entry.meanings.map((meaning: Meaning, index: number) => (
            <div key={index}>
              {/* Part of Speech Section */}
              <div className="my-8 flex items-center md:my-10">
                <p className="text-lg font-bold text-dark-300 dark:text-white md:text-2xl">
                  {meaning.partOfSpeech}
                </p>
                <div className="ml-4 h-[1px] w-full bg-dark-700 dark:bg-dark-300 md:ml-8" />
              </div>
              {/* Definition Section */}
              <p className="mb-3 text-base leading-6 text-dark-500 dark:text-dark-600 md:mb-6 md:text-xl">
                Meaning
              </p>
              {meaning.definitions.map(
                (definition: Definition, index: number) => (
                  <div key={index} className="px-6">
                    <ul>
                      <li className="mb-3 list-disc leading-6 text-dark-100 marker:text-primary-100 dark:text-white dark:marker:text-primary-500 md:ml-5 md:text-lg">
                        {definition.definition}
                      </li>
                    </ul>
                  </div>
                ),
              )}
              {/* Example Section */}
              {meaning.definitions.map(
                (definition: Definition, index: number) => (
                  <div key={index}>
                    {definition.example ? (
                      <p className="mt-3 px-6 text-base leading-6 text-dark-600 md:ml-5 md:text-lg">
                        {`"${definition.example}"`}
                      </p>
                    ) : null}
                  </div>
                ),
              )}
              {/* Example Synonyms */}
              {meaning.synonyms?.length === 0 ? null : (
                <div className="mt-6 flex md:mt-10">
                  <p className="text-base text-dark-500 dark:text-dark-600 md:text-xl">
                    Synonyms
                  </p>
                  <p className="ml-6 text-base font-bold text-primary-100 dark:text-primary-500 md:ml-8 md:text-xl">
                    {meaning.synonyms?.join(", ")}
                  </p>
                </div>
              )}

              {/* Example Antonyms */}
              {meaning.antonyms?.length === 0 ? null : (
                <div className="mt-6 flex md:mt-10">
                  <p className="text-base text-dark-500 dark:text-dark-600 md:text-xl">
                    Antonyms
                  </p>
                  <p className="ml-6 text-base font-bold text-primary-100 dark:text-primary-500 md:ml-8 md:text-xl">
                    {meaning.antonyms?.join(", ")}
                  </p>
                </div>
              )}
            </div>
          ))}
          <div className="mt-10 h-[1px] w-full bg-dark-700 dark:bg-dark-300" />
          {/* Source Section */}
          {entry.sourceUrls.length > 1 ? (
            <div className="mt-6 ">
              <p className=" text-sm text-dark-500 underline dark:text-dark-600 md:text-base">
                Source
              </p>
              <div>
                {entry.sourceUrls.map((source: string, index: number) => (
                  <a
                    className="mt-2 flex items-center text-sm text-dark-200 underline dark:text-white  md:text-base"
                    href={source}
                    key={index}
                  >
                    {source}
                    <LinkIcon className="ml-3 w-4" />
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-6 md:flex md:items-center">
              <p className=" text-sm text-dark-500 underline dark:text-dark-600 md:text-base">
                Source
              </p>
              <div className="md:ml-5">
                {entry.sourceUrls.map((source: string, index: number) => (
                  <a
                    className="mt-2 flex items-center  text-sm text-dark-200 underline dark:text-white md:mt-0 md:text-base"
                    href={source}
                    key={index}
                  >
                    {source}
                    <LinkIcon className="ml-3 w-4" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default DefinitionPage;
