"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function DropDown() {
  const [renderedFontName, setRenderedFontName] =
    useState<string>("Sans Serif");
  const [fontFamily, setFontFamily] = useState<string>("inter");
  const handleRenderedFontName = (family: string) => {
    if (family === "inter") {
      setRenderedFontName("Sans Serif");
    } else if (family === "lora") {
      setRenderedFontName("Serif");
    } else {
      setRenderedFontName("Mono");
    }
  };
  const handleFontFamilyChange = (family: string) => {
    setFontFamily(family);
    handleRenderedFontName(family);
  };
  useEffect(() => {
    document.body.style.fontFamily = fontFamily;
  }, [fontFamily]);

  return (
    <Menu as="div" className="relative w-fit items-center text-left">
      <div>
        <Menu.Button className=" inline-flex items-center justify-center rounded-md text-sm font-medium text-dark-100 hover:underline-offset-1 focus:outline-none dark:text-white md:text-lg">
          {renderedFontName}

          <ChevronDownIcon
            className="-mr-1 ml-2 h-5 w-5 text-primary-100 dark:text-primary-500 "
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-[1000] mt-2 w-40 origin-top-right divide-y divide-dark-700 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none dark:divide-dark-400 dark:bg-dark-300 dark:shadow-dark-200">
          <div className="">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active
                      ? "text-primary-100 dark:text-primary-500"
                      : "text-dark-200 dark:text-white"
                  } group flex w-full items-center rounded-md py-3 pl-6 font-inter text-sm font-bold md:text-lg`}
                  onClick={() => handleFontFamilyChange("inter")}
                >
                  Sans Serif
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active
                      ? "text-primary-100 dark:text-primary-500"
                      : "text-dark-200 dark:text-white"
                  } group flex w-full items-center rounded-md py-3 pl-6 font-lora text-sm font-bold md:text-lg`}
                  onClick={() => handleFontFamilyChange("lora")}
                >
                  Serif
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active
                      ? "text-primary-100 dark:text-primary-500"
                      : "text-dark-200 dark:text-white"
                  } group flex w-full items-center rounded-md py-3 pl-6 font-inconsolata text-sm font-bold md:text-lg`}
                  onClick={() => handleFontFamilyChange("inconsolata")}
                >
                  Mono
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
