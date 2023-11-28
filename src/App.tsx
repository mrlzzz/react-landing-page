import { useState } from "react";

import Page from "./components/page-1/Page";
import PageTwo from "./components/page-2/Page";
import PageThree from "./components/page-3/Page";
import PageFour from "./components/page-4/Page";
import PageFive from "./components/page-5/Page";
import "./App.css";
import { useAutoAnimate } from "@formkit/auto-animate/react";

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
  return (
    <>
      <div ref={parent} className="h-screen w-screen bg-black">
        <div className="fixed bottom-16 right-3 m-4 mb-6  rounded  md:bottom-0 md:right-10 md:mb-5">
          <button
            className="w-fit animate-pulse rounded bg-black px-4 py-2 text-white outline-none hover:bg-[#1a1a1a]  "
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
