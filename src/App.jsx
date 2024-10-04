import React, { useRef } from "react";
import HomePageSpace from "./components/homePage/homePageSpace.jsx";
import { history } from "./main.jsx";

export default function App() {
  return (
    <main>
      <HomePageSpace />
      <button
        onClick={() => {
          history.push("ExoPlanets");
        }}
        className="absolute flex items-center justify-center bg-primary-orange text-background-cream left-[80vw] w-[15rem] rounded-3xl p-2 top-[5vh] text-[1.5rem]"
      >
        Browse ExoPlanets
      </button>
    </main>
  );
}
