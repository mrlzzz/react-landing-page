const Footer = () => {
  return (
    <>
      <footer className="flex h-24 flex-col justify-center bg-violet-700">
        <div className="flex justify-center text-sm text-primary">
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
