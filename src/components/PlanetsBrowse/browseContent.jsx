import { Link } from "react-router-dom";
import { PlanetCard } from "./components/planetCard";
import { planets } from "./planets";

function BrowseContent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-primary-orange text-white">
      <Link
        to={"/"}
        className="absolute flex items-center justify-center bg-dark-green text-background-cream left-[2rem] w-[15rem] rounded-3xl p-2 top-[2rem] text-[1.35rem]"
      >
        Go Back
      </Link>
      <h1 className="text-3xl font-bold text-center my-8">Exoplanets</h1>
      <div className="flex flex-wrap justify-center">
        {planets.map((planet, index) => (
          <PlanetCard key={index} planet={planet} />
        ))}
      </div>
    </div>
  );
}

export default BrowseContent;
