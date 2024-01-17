import { useState, useEffect } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import Page from "./components/page-1/Page";
import PageTwo from "./components/page-2/Page";
import PageThree from "./components/page-3/Page";
import PageFour from "./components/page-4/Page";
import PageFive from "./components/page-5/Page";

import "./App.css";

function App() {
  const pages = [
    <Page></Page>,
    <PageTwo></PageTwo>,
    <PageThree></PageThree>,
    <PageFour></PageFour>,
    <PageFive></PageFive>,
  ];
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [parent] = useAutoAnimate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "ArrowRight") {
        setCurrentPageIndex((c) => (c + 1) % pages.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentPageIndex((c) => (c - 1 + pages.length) % pages.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pages.length]);

  return (
    <>
      <div ref={parent} className="h-full bg-black">
        <div className="fixed bottom-3 right-3 z-50 m-4 rounded md:bottom-2 md:right-2 md:mb-5">
          <button
            className="w-fit rounded border-2 border-white/50 bg-black/50 px-4 py-2 font-mono text-white hover:bg-[#1a1a1a]"
            onClick={() => {
              setCurrentPageIndex((currentPageIndex + 1) % pages.length);
            }}
          >
            NEXT &rarr;
          </button>
        </div>
        {pages[currentPageIndex]}
      </div>
    </>
  );
}

export default App;
