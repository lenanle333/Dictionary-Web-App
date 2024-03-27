import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
export default function Toggle() {
  const [enabled, setEnabled] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;
  if (resolvedTheme === "dark") {
    return (
      <div className="flex items-center">
        <Switch
          checked={!enabled}
          onChange={setEnabled}
          onClick={() => setTheme("light")}
          className="
        dark:hover:bg-primary-00 relative inline-flex h-5 w-10 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-dark-500 shadow-sm transition-colors duration-200 ease-in-out hover:bg-primary-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 dark:bg-primary-500 dark:hover:bg-primary-100"
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className=" pointer-events-none
           ml-[1px] inline-block h-3.5 w-3.5 translate-x-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
          />
        </Switch>
        <SunIcon className="ml-4 h-6 stroke-2 text-dark-500 dark:text-primary-500 md:ml-5" />
      </div>
    );
  }
  if (resolvedTheme === "light") {
    return (
      <div className="flex items-center">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          onClick={() => setTheme("dark")}
          className="
      dark:hover:bg-primary-00 relative inline-flex h-5 w-10 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-dark-500 shadow-sm transition-colors duration-200 ease-in-out hover:bg-primary-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 dark:bg-primary-500 dark:hover:bg-primary-100"
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className="pointer-events-none
          ml-[1px] inline-block h-3.5 w-3.5 translate-x-0 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
          />
        </Switch>
        <MoonIcon className="ml-4 h-6 stroke-2 text-dark-500 dark:text-primary-500 md:ml-5" />
      </div>
    );
  }
}
