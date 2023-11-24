const Footer = () => {
  return (
    <>
      <div className="flex h-24 flex-col justify-center">
        <div className="flex justify-center text-sm text-primary">
          Created by{" "}
          <span className="cursor-pointer transition-transform duration-200 ease-in-out hover:-translate-y-1">
            <a
              className="mx-2 text-white"
              href="https://mrlzzz.github.io/vite-project/"
            >
              @mrl
            </a>
          </span>
          based on
          <span className="cursor-pointer transition-transform duration-200 ease-in-out hover:-translate-y-1">
            <a className="mx-2 text-white" href="">
              {`[ xxx ]`}
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
