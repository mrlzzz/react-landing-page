const arrowRight = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M13.75 6.75L19.25 12L13.75 17.25"
    ></path>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M19 12H4.75"
    ></path>
  </svg>
);

const Content = () => {
  return (
    <div className="flex h-full flex-col justify-center  text-primary">
      <div className="flex justify-center">
        <div className=" flex max-w-[725px] flex-col items-center gap-8 text-center">
          <div>
            <h1 className="select-none text-[38px] font-bold leading-[46px] tracking-[-1.024px] text-[#cdced0] md:text-[70px] md:leading-[85px]">
              The next generation of writing emails
            </h1>
          </div>
          <div className="w-[70%] ">
            <span className="text-normal font-normal tracking-[-0.16px] text-[#949ba0] md:text-xl">
              A collection of high-quality, unstyled components for creating
              beautiful emails using React and TypeScript.
            </span>
          </div>
          <div className="flex gap-4">
            <a className="flex flex-col justify-center rounded-md border bg-white px-4 py-1 font-medium text-black hover:brightness-90">
              <div className="flex items-center">
                <span className="p-1 font-inter">Explore components </span>
                <span className="ml-1">{arrowRight}</span>
              </div>
            </a>
            {/* At the moment, this `pre` is a copypaste - START*/}
            <pre className="relative hidden  h-11 w-full max-w-max items-center overflow-auto whitespace-pre rounded-md border border-slate-600 pl-4 pr-10 text-sm backdrop-blur-md md:!inline-flex md:hidden">
              <button className="text-slate-11 focus:text-slate-12 focus:ring-slate-8 hover:text-slate-12 absolute right-2 rounded transition duration-200 ease-in-out focus:outline-none focus:ring-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 6.75H7.75C6.64543 6.75 5.75 7.64543 5.75 8.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V8.75C18.25 7.64543 17.3546 6.75 16.25 6.75H15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M14 8.25H10C9.44772 8.25 9 7.80228 9 7.25V5.75C9 5.19772 9.44772 4.75 10 4.75H14C14.5523 4.75 15 5.19772 15 5.75V7.25C15 7.80228 14.5523 8.25 14 8.25Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M9.75 12.25H14.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M9.75 15.25H14.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div className="before:mr-2 before:content-['$']">
                <span>npx create-email@latest</span>
              </div>
            </pre>
            {/* At the moment, this `pre` is a copypaste - STOP*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
