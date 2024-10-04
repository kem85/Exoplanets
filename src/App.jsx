import React from "react";
import { Canvas } from "@react-three/fiber";
import HomePageSpace from "./components/homePage/homePageSpace.jsx";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <main>
      <HomePageSpace />
      <Link
        to={"ExoPlanets"}
        className="absolute flex items-center justify-center bg-primary-orange text-background-cream left-[80vw] w-[15rem] rounded-3xl p-2 top-[5vh] text-[1.5rem]"
      >
        Browse ExoPlanets
      </Link>
    </main>
  );
}
