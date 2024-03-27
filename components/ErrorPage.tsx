import { ErrorPageProps } from "@/utility/types";
const ErrorPage: React.FC<ErrorPageProps> = ({ userInput }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="mb-8 text-7xl md:mb-11">👿</p>
      <p className="text-dark-100 mb-1 text-lg font-bold md:mb-3 dark:text-white ">
        No definitions found for
      </p>
      <p className="text-primary-100 dark:text-primary-500 text-lg font-normal md:text-2xl">
        "{userInput}"
      </p>
    </div>
  );
};
export default ErrorPage;
