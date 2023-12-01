const Footer = () => {
  return (
    <>
      <footer className="flex h-24 flex-col justify-center bg-[#1b6d3f]">
        <div className="flex justify-center text-sm text-[#f0f1d1]">
          Replicated by{" "}
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
            <a className="mx-2 text-white" href="https://flevosap.nl/">
              Flevosap
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
