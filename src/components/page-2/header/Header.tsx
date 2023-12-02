import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import logo from "../assets/logo.png";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [parent] = useAutoAnimate();
  const handleMenuButtonClick = (): void => {
    setToggleMenu(!toggleMenu);
  };
  const handleActiveMenuClick = (id: number): void => {
    setActiveMenuItem(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 90 ? setIsScrolling(true) : setIsScrolling(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathData = toggleMenu
    ? "M18 6 6 18 M6 6 18 18"
    : "M4 6h16M4 12h16M4 18h16";

  return (
    <>
      <header
        className="fixed top-0 z-20 w-full"
        onScroll={(e) => {
          console.log(e);
        }}
      >
        <div ref={parent} className="relative  shadow-md">
          <div
            className={`flex items-center justify-between px-7 py-2 transition-all duration-500 ${
              isScrolling
                ? "bg-[#f8f4eb]/100 md:py-[34px]"
                : "bg-[#f8f4eb]/50 md:py-[52px]"
            } lg:justify-center xl:px-40`}
          >
            <nav className="hidden w-full justify-evenly text-xl font-bold lg:flex">
              <div
                onClick={() => {
                  handleActiveMenuClick(1);
                }}
                className={`cursor-pointer  ${
                  activeMenuItem === 1 ? "text-[#cc1d1d]" : null
                } bg-inherit transition-all duration-300 `}
              >
                <a>About us</a>
              </div>
              <div
                onClick={() => {
                  handleActiveMenuClick(2);
                }}
                className={`cursor-pointer  ${
                  activeMenuItem === 2 ? "text-[#cc1d1d]" : null
                } bg-inherit transition-all duration-300 `}
              >
                <a>Products</a>
              </div>
              <div
                onClick={() => {
                  handleActiveMenuClick(3);
                }}
                className={`cursor-pointer  ${
                  activeMenuItem === 3 ? "text-[#cc1d1d]" : null
                } bg-inherit transition-all duration-300 `}
              >
                <a>News</a>
              </div>
            </nav>
            <a className="relative top-0 mt-2 w-fit md:absolute" href="#">
              <img
                className={`max-h-[80px] w-auto object-contain transition-all duration-300 ${
                  isScrolling ? "md:max-h-[100px]" : "md:max-h-[158px]"
                }`}
                src={logo}
                width="184"
                height="156"
              ></img>
            </a>
            <div className="flex w-full justify-end">
              <button
                type="button"
                onClick={handleMenuButtonClick}
                className="select-none rounded-full p-2 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-500 ease-in-out"
                >
                  <path d={pathData} />
                </svg>
              </button>
            </div>
            <nav className="hidden w-full justify-evenly font-bold lg:flex">
              <div
                onClick={() => {
                  handleActiveMenuClick(4);
                }}
                className={`cursor-pointer  ${
                  activeMenuItem === 4 ? "text-[#cc1d1d]" : null
                } bg-inherit transition-all duration-300 `}
              >
                <a>30th Anniversary</a>
              </div>
              <div
                onClick={() => {
                  handleActiveMenuClick(5);
                }}
                className={`cursor-pointer  ${
                  activeMenuItem === 5 ? "text-[#cc1d1d]" : null
                } bg-inherit transition-all duration-300 `}
              >
                <a>Contact</a>
              </div>
            </nav>
          </div>
          {toggleMenu ? (
            <div
              className={`bg flex flex-col text-right font-bold duration-500 lg:hidden ${
                isScrolling ? "bg-[#f8f4eb]/100" : "bg-[#f8f4eb]/50"
              }`}
            >
              <div className="py-10">
                <div
                  onClick={() => {
                    handleActiveMenuClick(1);
                  }}
                  className={`cursor-pointer px-8 py-2 ${
                    activeMenuItem === 1 ? "text-[#cc1d1d]" : null
                  } bg-inherit transition-all duration-300 hover:bg-white/50 active:bg-white/25`}
                >
                  <a>About us</a>
                </div>
                <div
                  onClick={() => {
                    handleActiveMenuClick(2);
                  }}
                  className={`cursor-pointer px-8 py-2 ${
                    activeMenuItem === 2 ? "text-[#cc1d1d]" : null
                  } bg-inherit transition-all duration-300 hover:bg-white/50 active:bg-white/25`}
                >
                  <a>Products</a>
                </div>
                <div
                  onClick={() => {
                    handleActiveMenuClick(3);
                  }}
                  className={`cursor-pointer px-8 py-2 ${
                    activeMenuItem === 3 ? "text-[#cc1d1d]" : null
                  } bg-inherit transition-all duration-300 hover:bg-white/50 active:bg-white/25`}
                >
                  <a>News</a>
                </div>
              </div>
              <div className="border-t border-black py-8 text-sm">
                <div
                  onClick={() => {
                    handleActiveMenuClick(4);
                  }}
                  className={`cursor-pointer px-8 py-2 ${
                    activeMenuItem === 4 ? "text-[#cc1d1d]" : null
                  } bg-inherit transition-all duration-300 hover:bg-white/50 active:bg-white/25`}
                >
                  <a>30th Anniversary</a>
                </div>
                <div
                  onClick={() => {
                    handleActiveMenuClick(5);
                  }}
                  className={`cursor-pointer px-8 py-2 ${
                    activeMenuItem === 5 ? "text-[#cc1d1d]" : null
                  } bg-inherit transition-all duration-300 hover:bg-white/50 active:bg-white/25`}
                >
                  <a>Contact</a>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </header>
    </>
  );
};

export default Header;
