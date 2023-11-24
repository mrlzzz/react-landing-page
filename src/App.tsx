import { useState } from "react";

import Page from "./components/page-1/Page";
import PageTwo from "./components/page-2/Page";
import "./App.css";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function App() {
  const pages = [<Page></Page>, <PageTwo></PageTwo>];
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [parent] = useAutoAnimate();
  return (
    <>
      <div ref={parent} className="h-screen w-screen bg-black">
        <button
          className="fixed bottom-16 right-3 mb-6 w-fit rounded px-4 py-2 text-white outline-none hover:bg-gray-900 md:bottom-0 md:right-10 md:mb-5 "
          onClick={() => {
            setCurrentPageIndex((currentPageIndex + 1) % pages.length);
          }}
        >
          NEXT &rarr;
        </button>
        {pages[currentPageIndex]}
      </div>
    </>
  );
}

export default App;
