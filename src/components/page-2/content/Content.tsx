import cloud from "../assets/visual-cloud.png";
// "2xl:-top-10 w-[300vw] md:w-full absolute"
const svg = (
  <svg
    className="absolute -top-10  w-[300vw] md:w-full "
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 128"
    aria-hidden="true"
  >
    <path
      fill="#F0F1D1"
      fill-rule="evenodd"
      d="M-1 128h1441V10.346c-15.931 1.765-32.565 2.85-46.786 7.017-18.994 5.56-30.708 22.76-53.462 20.307-19.23-2.074-30.91-11.889-51.297-12.6-19.53-.693-40.107-1.67-58.942-7.002-21.126-5.972-35.514-5.135-58.943-2.415-19.923 2.285-45.998 8.164-66.307 6.447-20.595-1.769-32.584-20.241-54.547-18.186-15.56 1.442-28.06 12.484-47.419 8.861-16.9-3.164-25.886-13.905-46.005-12.678-18.156 1.115-35.18 10.787-51.368 14.799-9.106 2.218-18.602 6.33-28.485 7.212-8.117.743-17.501-1.64-25.455-.301-18.515 3.093-27.66 7.68-46.94 4.012-6.875-1.304-12.86-1.899-18.517-1.899-5.67 0-11.642.595-18.53 1.9-19.26 3.667-28.404-.92-46.926-4.013-7.96-1.338-17.34 1.044-25.469.3-9.87-.88-19.387-4.993-28.478-7.211C649.943 10.884 632.9 1.212 614.775.097c-20.137-1.227-29.124 9.514-46.05 12.678-19.335 3.623-31.833-7.419-47.392-8.861-21.964-2.055-33.94 16.417-54.555 18.186-20.32 1.717-46.378-4.162-66.3-6.447-23.428-2.72-37.81-3.557-58.956 2.415-18.843 5.331-39.387 6.31-58.917 7.001-20.392.712-32.074 10.527-51.29 12.6-22.8 2.454-34.474-3.927-53.467-9.487-19.321-5.657-43.09-5.63-63.489-9.344-17.823-3.224-27.253.743-45.783 3.785-22.191 3.647-34.161-.626-53.75-6.193C8.706 14.68 3.616 13.91-1 13.76V128Z"
    ></path>
  </svg>
);

const Content = (): React.JSX.Element => {
  return (
    <>
      {/* Theme color - bg-[#f4f6dd] */}
      <main>
        <div className="h-screen overflow-hidden bg-blue-400 text-4xl font-bold text-white/80">
          <div
            style={{
              backgroundImage: `url(${cloud})`,
            }}
            className="top-20  h-full  w-[2880px] animate-marquee bg-red-100  bg-bottom  bg-repeat-x object-contain"
          >
            <div className="absolute left-1/2 top-[15%] -translate-x-1/2 -translate-y-1/2 text-[#1b6d3f]">
              <h1>Hero message, bla bla!</h1>
            </div>
          </div>
        </div>
        <div className="relative  h-screen  bg-[#F0F1D1] text-4xl font-bold text-white/80">
          <div className="absolute inset-0 overflow-hidden md:overflow-visible">
            {svg}
          </div>
        </div>
      </main>
    </>
  );
};

export default Content;
