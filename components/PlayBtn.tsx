type Props = {
  url: string;
};

export default function PlayBtn({ url }: Props) {
  let audio = new Audio(url);
  const handlePlay = () => {
    audio.play();
  };

  return (
    <div>
      <svg
        onClick={handlePlay}
        xmlns="http://www.w3.org/2000/svg"
        className="group h-12 w-12 cursor-pointer md:h-[75px] md:w-[75px]"
        viewBox="0 0 75 75"
      >
        <g
          className="dark:group-hover:fill-primary-500 group-hover:fill-primary-100 dark:fill-primary-500 fill-primary-100 transition-colors duration-200 ease-in-out"
          fillRule="evenodd"
        >
          <circle
            className="opacity-25 group-hover:opacity-100"
            cx="37.5"
            cy="37.5"
            r="37.5"
          />
          <path
            className=" fill-primary-100 group-hover:fill-white"
            d="M29 27v21l21-10.5z"
          />
        </g>
      </svg>
    </div>
  );
}
