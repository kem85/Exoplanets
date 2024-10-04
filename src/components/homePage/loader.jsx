import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { active, progress } = useProgress();
  return (
    <Html
      center
      className="w-full h-full flex items-center justify-center text-white"
    >
      {progress.toFixed(1)} % loading...
    </Html>
  );
}
export default Loader;
